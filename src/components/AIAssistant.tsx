'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight, Zap, Globe, Settings, Terminal } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
  id: string
  text: string
  sender: 'ai' | 'user'
  timestamp: Date
}

export default function AIAssistant() {
  const t = useTranslations('ai_assistant')
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          {
            id: '1',
            text: t('welcome_message'),
            sender: 'ai',
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen, messages.length, t])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInputValue('')
    setIsTyping(true)

    // Action check for immediate feedback (e.g. scrolling)
    const lowerText = text.toLowerCase()
    const isContactRequest = lowerText.includes('iletişim') || lowerText.includes('contact') || lowerText.includes('ulaş') || text === t('suggest_contact')

    try {
      // Prepare messages for API
      const apiMessages = messages.map(msg => ({
        role: msg.sender === 'ai' ? 'assistant' : 'user',
        content: msg.text
      }))
      apiMessages.push({ role: 'user', content: text })

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, locale: params.locale })
      })

      if (!response.ok) throw new Error('API error')

      // Handle streaming
      const reader = response.body?.getReader()
      if (!reader) throw new Error('No reader')

      const aiMessageId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: aiMessageId,
          text: '',
          sender: 'ai',
          timestamp: new Date(),
        },
      ])

      const decoder = new TextDecoder()
      let aiText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim()
            if (dataStr === '[DONE]') break
            
            try {
              const data = JSON.parse(dataStr)
              const content = data.choices[0]?.delta?.content || ''
              aiText += content
              
              setMessages((prev) => prev.map(msg => 
                msg.id === aiMessageId ? { ...msg, text: aiText } : msg
              ))
            } catch (e) {
              // Ignore parse errors for partial chunks
            }
          }
        }
      }

      if (isContactRequest) {
        setTimeout(() => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
          }
        }, 3000)
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: t('default_response'),
          sender: 'ai',
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const suggestions = [
    { text: t('suggest_services'), icon: <Settings className="w-4 h-4" /> },
    { text: t('suggest_pricing'), icon: <Zap className="w-4 h-4" /> },
    { text: t('suggest_contact'), icon: <ArrowRight className="w-4 h-4" /> },
  ]

  const [hasNotification, setHasNotification] = useState(true)

  useEffect(() => {
    // Auto-open after 5 seconds if not already opened
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setIsOpen(true)
        setHasNotification(false)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [isOpen, messages.length])

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onViewportEnter={() => setHasNotification(false)}
            className="mb-4 w-[380px] h-[550px] flex flex-col glassmorphism-strong rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm leading-none flex items-center gap-1.5">
                    Arvexa AI
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-white/50 mt-1">{t('online_status')}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.sender === 'ai' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'ai'
                         ? 'bg-white/10 border border-white/10 text-white rounded-tl-none prose prose-invert prose-sm max-w-none'
                         : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none shadow-lg'
                    }`}
                  >
                    {msg.sender === 'ai' ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text || (isTyping && msg.id === messages[messages.length-1].id ? '...' : '')}
                      </ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    key={i}
                    onClick={() => handleSendMessage(s.text)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {s.icon}
                    {s.text}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder={t('input_placeholder')}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-white/20 mt-2 text-center">
                {t('disclaimer')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 rounded-2xl bg-[#030308] flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden border border-white/10 transition-all duration-500"
      >
        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-cyan-500/50 transition-colors duration-500" />
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        
        {/* Pulsing rings */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-2xl animate-ping bg-cyan-500/5 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </>
        )}
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            >
              <X className="w-8 h-8 text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bot className="w-9 h-9 text-white relative z-10 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-500 rounded-full border-2 border-[#030308] z-20 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              
              {hasNotification && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -left-3 w-5 h-5 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] border border-white/20 z-[30]"
                >
                  1
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
