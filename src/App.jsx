import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FuzzyText from './components/FuzzyText'
import AllProjectsMobile from './components/AllProjectsMobile'

function App() {
  const [loading, setLoading] = useState(true)
  const [heroReady, setHeroReady] = useState(false)
  const [experienceCount, setExperienceCount] = useState(0)
  const [statsCount, setStatsCount] = useState(0)
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setHeroReady(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  useEffect(() => {
    if (!heroReady) {
      setExperienceCount(0)
      return
    }

    const start = 0
    const end = 17
    const duration = 2500
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const value = Math.floor(start + (end - start) * progress)
      setExperienceCount(value)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [heroReady])

  useEffect(() => {
    if (!heroReady) {
      setStatsCount(0)
      return
    }

    const start = 0
    const end = 76285
    const duration = 2500
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const value = Math.floor(start + (end - start) * progress)
      setStatsCount(value)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [heroReady])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-void flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer rotating hexagon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <polygon
                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                    fill="none"
                    stroke="#FF9900"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>

              {/* Inner rotating hexagon */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <polygon
                    points="70,14 119,42 119,98 70,126 21,98 21,42"
                    fill="none"
                    stroke="#FF9900"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                </svg>
              </motion.div>

              {/* Center pulsing circle */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-neonOrange shadow-[0_0_40px_rgba(255,153,0,0.8)]"
              />

              {/* Fuzzy Text - DEEP TECH */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-32 left-1/2 -translate-x-1/2"
              >
                <FuzzyText
                  fontSize="clamp(2.2rem, 4vw, 4rem)"
                  fontWeight={900}
                  fontFamily="Orbitron"
                  color="#FF9900"
                  baseIntensity={0.35}
                  enableHover={false}
                >
                  DEEP TECH
                </FuzzyText>
              </motion.div>

              {/* Loading text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <p className="text-neonOrange font-orbitron text-xl tracking-[0.3em] font-bold">
                  LOADING
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ...
                  </motion.span>
                </p>
              </motion.div>

              {/* Corner brackets */}
              <div className="absolute -top-8 -left-8 w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 48 48">
                  <path d="M 0 8 Q 0 0 8 0 L 48 0" stroke="#FF9900" strokeWidth="2" fill="none" />
                  <path d="M 0 0 L 0 48" stroke="#FF9900" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="absolute -top-8 -right-8 w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 48 48">
                  <path d="M 48 8 Q 48 0 40 0 L 0 0" stroke="#FF9900" strokeWidth="2" fill="none" />
                  <path d="M 48 0 L 48 48" stroke="#FF9900" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 48 48">
                  <path d="M 0 40 Q 0 48 8 48 L 48 48" stroke="#FF9900" strokeWidth="2" fill="none" />
                  <path d="M 0 48 L 0 0" stroke="#FF9900" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 48 48">
                  <path d="M 48 40 Q 48 48 40 48 L 0 48" stroke="#FF9900" strokeWidth="2" fill="none" />
                  <path d="M 48 48 L 48 0" stroke="#FF9900" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-void text-white font-inter overflow-hidden">
      {/* Outer Frame with Border */}
      {!showProjects && (
      <div className="absolute inset-4 border border-gray-800 pointer-events-none z-50">
        {/* Corner Brackets - Top Left */}
        <div className="absolute -top-1 -left-1 w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M 0 12 Q 0 0 12 0 L 64 0" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 0 0 L 0 64" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow)" />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Corner Brackets - Top Right */}
        <div className="absolute -top-1 -right-1 w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M 64 12 Q 64 0 52 0 L 0 0" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow2)" />
            <path d="M 64 0 L 64 64" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow2)" />
            <defs>
              <filter id="glow2">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Corner Brackets - Bottom Left */}
        <div className="absolute -bottom-1 -left-1 w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M 0 52 Q 0 64 12 64 L 64 64" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow3)" />
            <path d="M 0 64 L 0 0" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow3)" />
            <defs>
              <filter id="glow3">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Corner Brackets - Bottom Right */}
        <div className="absolute -bottom-1 -right-1 w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M 64 52 Q 64 64 52 64 L 0 64" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow4)" />
            <path d="M 64 64 L 64 0" stroke="#FF9900" strokeWidth="2" fill="none" filter="url(#glow4)" />
            <defs>
              <filter id="glow4">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      )}

      {showProjects ? (
        <AllProjectsMobile
          onBackHome={() => setShowProjects(false)}
          onProjectSelect={() => {}}
        />
      ) : (
      <>
      <div className="hidden md:block">
        {/* Horizontal Line Below Frame */}
        <div className="absolute top-[88px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-neonOrange to-transparent shadow-[0_0_20px_rgba(255,153,0,0.8)] z-40"></div>

        {/* Navigation Bar */}
        <nav className="relative z-40 px-12 py-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-orbitron font-bold"
          >
            <span className="text-neonOrange">Deep</span>
            <span className="text-white">Tech</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-12 text-gray-400 font-inter tracking-wide"
          >
            {['Home', 'Pages', 'Support', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 153, 0, 0.6)' }}
            className="px-8 py-3 bg-gradient-to-r from-neonOrange to-gradientOrange rounded-full font-semibold tracking-wide transition-all duration-300"
            onClick={() => setShowProjects(true)}
          >
            See all project
          </motion.button>
        </nav>

        {/* Main Hero Section */}
        <div className="relative h-[calc(100vh-100px)]">
          {/* Massive Title - Layer 2 (Behind Character) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative text-center text-[8rem] font-orbitron font-black tracking-widest text-white z-10 whitespace-nowrap pt-8"
            style={{ letterSpacing: '0.15em' }}
          >
            DEEP TECH
          </motion.h1>

          {/* Central Cyborg Image - Layer 3 (Front, overlaps title) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Glowing effect behind image - top and sides only */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[350px] bg-gradient-to-b from-neonOrange/30 via-neonOrange/10 to-transparent blur-3xl pointer-events-none"></div>
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                src="https://instasize.com/p/c905949763134aa504040ece24bb6e8791f94cfd6e6a5169f1b6510519c1a2e9"
                alt="Futuristic Cyborg" 
                className="h-[520px] w-auto object-contain relative z-10"
              />
              {/* Fade to black gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void via-void/80 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Top Left Annotation - Layer 4 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-[280px] left-24 z-30"
          >
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-neonOrange shadow-[0_0_15px_rgba(255,153,0,0.8)] animate-pulse"></div>
                  <div className="absolute top-3 left-1.5 w-0.5 h-32 bg-gradient-to-b from-neonOrange to-transparent"></div>
                </div>
                <div>
                  <p className="text-neonOrange font-semibold text-sm tracking-widest mb-2">STORIES & LORE</p>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Dive into compelling narratives set in a dystopian future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Info Block - Layer 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute top-[280px] right-24 z-30 text-right max-w-sm"
          >
            <h3 className="text-neonOrange font-orbitron font-bold text-base tracking-widest mb-4">
              EVENTS AND UPDATES
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-6">
              Explore the high-tech, low-life world where the lines between humanity and machinery blur.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 153, 0, 0.5)' }}
              className="px-6 py-2.5 bg-gradient-to-r from-neonOrange to-gradientOrange font-semibold text-sm tracking-wide inline-flex items-center gap-2 transition-all duration-300"
            >
              Read More
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Bottom Left Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-24 left-24 z-30"
          >
            <div className="glass-morph rounded-lg p-5 flex items-center gap-5 min-w-[420px]">
              <div className="w-20 h-20 bg-gradient-to-br from-neonOrange to-gradientOrange rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-16 h-16 bg-void rounded-lg"></div>
              </div>
              <div>
                <p className="text-4xl font-orbitron font-bold text-neonOrange mb-1">{statsCount.toLocaleString()}K+</p>
                <p className="text-gray-300 text-sm tracking-wide mb-1">Experience the Future</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Explore the high-tech, low-life world where the lines between
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Center Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 text-center max-w-md"
          >
            <h3 className="text-neonOrange font-orbitron font-bold text-lg tracking-widest mb-3">
              ART AND DESIGN
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Feast your eyes on stunning visuals that bring the cyberpunk aesthetic to life. 
              Every pixel crafted with precision and passion.
            </p>
          </motion.div>

          {/* Bottom Right Stat Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-24 right-24 z-30"
          >
            <div className="glass-morph rounded-lg p-8 text-center w-48">
              <p className="text-6xl font-orbitron font-bold text-neonOrange mb-2">{experienceCount}+</p>
              <p className="text-gray-300 text-sm tracking-wide leading-relaxed">
                Years of Experiences
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-40 md:hidden">
        <section className="flex flex-col min-h-screen px-6 pt-6 pb-8">
          <header className="flex items-center justify-between mb-6">
            <div className="text-xl font-orbitron font-bold tracking-[0.25em]">
              <span>Deep</span>
              <span className="text-neonOrange"> Tech</span>
            </div>
            <button className="flex flex-col items-end gap-1.5">
              <span className="h-0.5 w-6 bg-white rounded-full"></span>
              <span className="h-0.5 w-5 bg-white rounded-full"></span>
              <span className="h-0.5 w-4 bg-white rounded-full"></span>
            </button>
          </header>

          <div className="flex-1 flex flex-col justify-center">
            <div className="relative w-full max-w-md min-h-[420px] mx-auto">
              <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center text-7xl font-orbitron font-black tracking-[0.35em]"
                initial={{ y: 0, opacity: 0, x: 8 }}
                animate={heroReady ? { y: -185, opacity: 1, x: 8 } : { y: 0, opacity: 0, x: 8 }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              >
                DEEP
              </motion.div>

              <div className="relative z-20 flex items-center justify-center h-full">
                <div className="relative w-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[300px] bg-gradient-to-b from-neonOrange/30 via-neonOrange/10 to-transparent blur-3xl pointer-events-none"></div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
                    src="./cyber-man.png"
                    alt="Futuristic Cyborg"
                    className="relative z-20 w-[88vw] max-w-md h-auto object-cover mx-auto block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-void via-void/80 to-transparent pointer-events-none z-40"></div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 z-30 flex items-center justify-center text-7xl font-orbitron font-black tracking-[0.35em]"
                initial={{ y: 0, opacity: 0, x: 8 }}
                animate={heroReady ? { y: 170, opacity: 1, x: 8 } : { y: 0, opacity: 0, x: 8 }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              >
                TECH
              </motion.div>
            </div>

            <div className="mt-6 flex flex-col space-y-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-4 py-4 flex gap-4 items-center w-full shadow-[0_0_30px_rgba(255,153,0,0.7)]">
                <div className="w-10 h-10 bg-gradient-to-br from-neonOrange to-gradientOrange rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-7 h-7 bg-void rounded-lg"></div>
                </div>
                <div>
                  <p className="text-xl font-orbitron font-bold text-neonOrange leading-tight">
                    {statsCount.toLocaleString()}K+
                  </p>
                  <p className="text-[11px] text-gray-200 font-semibold mt-1">
                    Experience the Future
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-4 py-4 w-full">
                <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-neonOrange mb-2">
                  Art and Design
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Feast your eyes on stunning visuals that bring the cyberpunk aesthetic to life.
                </p>
              </div>

              <button
                className="w-full py-3 rounded-full bg-gradient-to-r from-neonOrange to-gradientOrange text-[11px] font-semibold tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(255,153,0,0.7)]"
                onClick={() => setShowProjects(true)}
              >
                See all project
              </button>
            </div>
          </div>
        </section>
      </div>
      </>
      )}
      </div>
    </>
  )
}

export default App
