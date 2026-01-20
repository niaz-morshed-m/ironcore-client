import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Professional equipment selection',
  'Space optimization consultation',
  'Installation and setup service',
  'Maintenance and warranty support',
  '24/7 expert guidance',
  'Custom workout plans included'
]

const packages = [
  {
    name: 'Starter',
    price: 899,
    description: 'Perfect for beginners',
    items: ['Basic equipment set', 'Setup guide', '3-month support']
  },
  {
    name: 'Pro',
    price: 1899,
    description: 'For serious fitness enthusiasts',
    items: ['Premium equipment', 'Professional setup', '1-year support', 'Custom plans'],
    popular: true
  },
  {
    name: 'Elite',
    price: 3499,
    description: 'Complete home gym solution',
    items: ['Top-tier equipment', 'Full installation', 'Lifetime support', 'Personal trainer access']
  }
]

export default function BuildHomeGym() {
  return (
    <section className="py-20 px-4 bg-slate-950 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Build Your <span className="text-primary">Home Gym</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Transform any space into your personal fitness sanctuary. Our experts will help you design, 
              select, and install the perfect equipment for your goals and space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-primary text-slate-900 font-bold px-8 py-4 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 flex items-center gap-2">
              Start Planning
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Right Content - Packages */}
          <div className="space-y-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                  pkg.popular 
                    ? 'border-primary bg-primary/10' 
                    : 'border-slate-700 bg-slate-800/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-primary text-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                    <p className="text-xs text-slate-400">starting from</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 font-bold uppercase tracking-wider transition-all ${
                  pkg.popular
                    ? 'bg-primary text-slate-900 hover:bg-white'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}