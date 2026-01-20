export default function Newsletter() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-slate-900 dark:bg-card-dark rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              JOIN THE <span className="text-primary">ELITE</span>
            </h2>
            <p className="text-slate-400 mb-0">
              Sign up for our newsletter to receive exclusive offers, training tips, and early access to new product drops.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input 
              className="bg-slate-800 border-none text-white px-6 py-4 rounded-full focus:ring-primary w-full md:w-80" 
              placeholder="Your Email Address" 
              type="email"
            />
            <button className="bg-primary text-slate-900 font-bold px-8 py-4 rounded-full uppercase tracking-widest hover:bg-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}