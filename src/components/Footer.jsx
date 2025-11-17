export default function Footer() {
  return (
    <footer id="recognition" className="pt-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-orange-50/60 p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Celebrate every milestone</h4>
              <p className="text-gray-600 mt-2">Give students instant recognition with weekly shout-outs and monthly awards. Turn effort into momentum.</p>
            </div>
            <div className="flex justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white font-semibold px-5 py-3 hover:bg-black">Book a Demo</a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} BrightPath Academy. All rights reserved.</div>
      </div>
    </footer>
  )
}
