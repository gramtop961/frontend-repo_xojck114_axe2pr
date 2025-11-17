import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Achievement Season is On
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            A playful space where curiosity turns into achievement
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrate effort, track progress, and spark a love for learning with an interactive school display that motivates every student.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href="#impact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-semibold px-5 py-3 shadow-lg shadow-orange-500/30 hover:brightness-110 transition">
              Explore Impact
            </a>
            <a href="#highlights" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold px-5 py-3 hover:bg-gray-50">
              See Highlights
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
