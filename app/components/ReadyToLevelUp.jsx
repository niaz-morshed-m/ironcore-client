import { ArrowRight, Zap, Target, Trophy } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Start your fitness journey immediately with our comprehensive platform'
  },
  {
    icon: Target,
    title: 'Personalized Goals',
    description: 'Custom workout plans tailored to your specific fitness objectives'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Join thousands who have achieved their fitness goals with IronCore'
  }
]

export default function ReadyToLevelUp() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Ready to <span className="text-primary">Level Up?</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your fitness journey with premium equipment, expert guidance, and a community 
            that supports your goals. Your strongest self is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary text-slate-900 font-bold px-10 py-4 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Stats */}
        <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm border border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">50k+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Happy Customers</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Expert Support</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">5★</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Average Rating</div>
            </div>
          </div>
          
          <p className="text-slate-300 mb-6">
            Join the IronCore community today and get <span className="text-primary font-bold">FREE shipping</span> on your first order
          </p>
          
          <button className="bg-primary text-slate-900 font-bold px-12 py-5 text-lg uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}