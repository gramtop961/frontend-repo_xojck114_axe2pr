import { Trophy, Target, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Trophy, label: 'House Points', value: '12,480', desc: 'This term' },
  { icon: Target, label: 'Goals Completed', value: '867', desc: 'Across grades' },
  { icon: Users, label: 'Clubs Active', value: '24', desc: 'After school' },
  { icon: Star, label: 'Shout‑outs', value: '1,356', desc: 'Peer kudos' },
]

export default function Impact() {
  return (
    <section id="impact" className="relative py-20 bg-gradient-to-b from-white to-orange-50/40">
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(255,200,150,0.25),rgba(255,255,255,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Impact that students can see and feel</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Big screens, bright colors, and real-time progress help students stay motivated and proud of their work.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white/70 backdrop-blur border border-orange-200/50 p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white grid place-items-center shadow-md">
                  <s.icon size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
