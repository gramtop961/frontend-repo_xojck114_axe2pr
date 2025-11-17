import { Menu, BookOpen, Trophy, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-400 to-amber-500 grid place-items-center text-white shadow-lg shadow-orange-500/30">
              <Sparkles size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">BrightPath Academy</p>
              <p className="text-xs text-gray-500">Where effort becomes achievement</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#impact" className="hover:text-gray-900">Impact</a>
            <a href="#highlights" className="hover:text-gray-900">Highlights</a>
            <a href="#recognition" className="hover:text-gray-900">Recognition</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <BookOpen size={16} />
              Parent Portal
            </button>
            <button className="inline-flex md:hidden rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
