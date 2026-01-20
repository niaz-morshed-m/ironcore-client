export default function Hero() {
  return (
    <section className="hero-gradient min-h-[600px] flex items-center justify-center text-center text-white px-4 relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <p className="font-display tracking-[0.3em] text-sm md:text-xl mb-4 opacity-90 uppercase">
          Store
        </p>
        <h1 className="font-display text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          PREMIUM <span className="text-primary">GYM GEAR</span>
        </h1>
        <p className="text-slate-200 max-w-xl mx-auto mb-8 leading-relaxed font-light">
          Elevate your performance with professional-grade fitness equipment designed for champions. 
          Quality you can trust, results you can feel.
        </p>
        <a 
          className="inline-block bg-primary text-slate-900 font-bold px-10 py-4 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1" 
          href="#products"
        >
          Shop Now
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
    </section>
  )
}