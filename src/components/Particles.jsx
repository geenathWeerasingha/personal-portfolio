import { useEffect, useRef, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

function Particles() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const { isDark } = useTheme()

  const initParticles = useCallback((canvas, dark) => {
    const particles = []
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: dark ? Math.random() * 0.6 + 0.3 : Math.random() * 0.5 + 0.2,
        // Cyan/teal color palette - brighter in dark mode
        color: Math.random() > 0.5 
          ? (dark ? '34, 211, 238' : '6, 182, 212')  // cyan-400 : cyan-500
          : (dark ? '45, 212, 191' : '20, 184, 166'), // teal-400 : teal-500
      })
    }
    
    return particles
  }, [])

  const drawParticles = useCallback((ctx, canvas, particles, mouse, dark) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy
      
      // Mouse interaction - particles gently move away from cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.x += dx * force * 0.02
          particle.y += dy * force * 0.02
        }
      }
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0
      
      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
      ctx.fill()
      
      // Draw connections between nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j]
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          const lineOpacity = (1 - distance / 120) * (dark ? 0.25 : 0.15)
          ctx.strokeStyle = dark 
            ? `rgba(34, 211, 238, ${lineOpacity})`  // cyan-400
            : `rgba(6, 182, 212, ${lineOpacity})`   // cyan-500
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = initParticles(canvas, isDark)
    }
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    
    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }
    
    handleResize()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    const animate = () => {
      drawParticles(ctx, canvas, particlesRef.current, mouseRef.current, isDark)
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles, drawParticles, isDark])

  // Re-initialize particles when theme changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      particlesRef.current = initParticles(canvas, isDark)
    }
  }, [isDark, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default Particles
