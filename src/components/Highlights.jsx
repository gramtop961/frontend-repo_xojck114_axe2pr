import { Sparkles, Medal, Rocket, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Medal,
    title: 'Weekly Champions',
    desc: 'Top-performing houses and classes highlighted every Friday.',
  },
  {
    icon: Rocket,
    title: 'Growth Streaks',
    desc: 'Celebrate consistent effort with fun streak animations.',
  },
  {
    icon: ThumbsUp,
    title: 'Kindness Wall',
    desc: 'Peer shout-outs that promote empathy and teamwork.',
  },
  {
    icon: Sparkles,
    title: 'Creative Corner',
    desc: 'Showcase art, science builds, and coding projects.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-gray-900">Highlights that inspire action</h3>
            <p className="text-gray-600">Designed for big screens and hallways, everything is bright, bold, and easy to read from a distance.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {items.map((it, i) => (
                <div key={it.title} className="rounded-2xl border border-gray-200 p-5 bg-white/90 hover:bg-white transition">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 text-orange-600 grid place-items-center">
                    <it.icon size={18} />
                  </div>
                  <h4 className="mt-3 font-semibold text-gray-900">{it.title}</h4>
                  <p className="text-sm text-gray-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200/70 p-6 overflow-hidden">
              <div className="absolute -top-16 -right-10 h-60 w-60 bg-orange-300/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-60 w-60 bg-amber-300/30 rounded-full blur-3xl" />
              <div className="relative h-full w-full grid place-items-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">Live Leaderboard</p>
                  <p className="text-5xl font-extrabold text-gray-900 mt-2">House Phoenix</p>
                  <p className="text-gray-600 mt-1">12,480 points</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
