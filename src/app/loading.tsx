export default function Loading() {
  return (
    <div className="min-h-screen bg-[#030308] flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-teal-500/50 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-lg">
          Yükleniyor...
        </p>
      </div>
    </div>
  )
}
