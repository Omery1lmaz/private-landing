'use client'

import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'

export default function Globe3D() {
  const globeRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Get container dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate the globe
      const controls = globeRef.current.controls()
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.8
      controls.enableZoom = false
      controls.enablePan = false

      // Set initial camera position for better view
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
    }
  }, [dimensions])

  // Data center locations
  const dataCenters = [
    { lat: -33.8688, lng: 151.2093, name: 'Avustralya', size: 0.8 },
    { lat: -23.5505, lng: -46.6333, name: 'Brezilya', size: 0.8 },
    { lat: 48.8566, lng: 2.3522, name: 'Fransa', size: 1 },
    { lat: 52.5200, lng: 13.4050, name: 'Almanya', size: 1 },
    { lat: 19.0760, lng: 72.8777, name: 'Hindistan', size: 0.9 },
    { lat: 35.6762, lng: 139.6503, name: 'Japonya', size: 1 },
    { lat: 51.5074, lng: -0.1278, name: 'İngiltere', size: 1 },
    { lat: 40.7128, lng: -74.0060, name: 'ABD Doğu', size: 1.2 },
    { lat: 37.7749, lng: -122.4194, name: 'ABD Batı', size: 1.2 },
    { lat: 1.3521, lng: 103.8198, name: 'Singapur', size: 0.9 },
    { lat: 25.2048, lng: 55.2708, name: 'BAE', size: 0.8 },
    { lat: 41.0082, lng: 28.9784, name: 'Türkiye', size: 1 },
  ]

  const pointsData = dataCenters.map((dc) => ({
    lat: dc.lat,
    lng: dc.lng,
    size: dc.size,
    color: '#06b6d4',
    name: dc.name,
  }))

  // Arc data for connections
  const arcsData = [
    { startLat: 41.0082, startLng: 28.9784, endLat: 52.5200, endLng: 13.4050 },
    { startLat: 41.0082, startLng: 28.9784, endLat: 40.7128, endLng: -74.0060 },
    { startLat: 52.5200, startLng: 13.4050, endLat: 40.7128, endLng: -74.0060 },
    { startLat: 40.7128, startLng: -74.0060, endLat: 37.7749, endLng: -122.4194 },
    { startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503 },
    { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198 },
    { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093 },
  ]

  if (dimensions.width === 0) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#06b6d4"
        atmosphereAltitude={0.2}
        // Points (data centers)
        pointsData={pointsData}
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}
        pointResolution={12}
        pointLabel="name"
        // Rings animation
        ringsData={pointsData}
        ringColor={() => 'rgba(6, 182, 212, 0.6)'}
        ringMaxRadius={3}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1500}
        // Arcs (connections)
        arcsData={arcsData}
        arcColor={() => ['rgba(6, 182, 212, 0.3)', 'rgba(20, 184, 166, 0.3)']}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        // Renderer config
        rendererConfig={{
          antialias: true,
          alpha: true,
        }}
      />
    </div>
  )
}
