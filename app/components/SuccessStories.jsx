import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop',
    rating: 5,
    quote: 'IronCore transformed my home into a professional gym. The equipment quality is outstanding and the setup service was flawless.',
    achievement: 'Lost 30lbs in 6 months'
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    rating: 5,
    quote: 'As a trainer, I recommend IronCore to all my clients. Their equipment is durable, reliable, and perfect for serious training.',
    achievement: 'Built 15+ home gyms'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Busy Mom',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop',
    rating: 5,
    quote: 'Having a home gym changed my life. I can work out anytime without leaving my kids. IronCore made it possible and affordable.',
    achievement: 'Workout consistency: 95%'
  }
]

export default function SuccessStories() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            Success Stories
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real transformations from real people who chose IronCore for their fitness journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary">
                  🏆 {testimonial.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-slate-900 font-bold px-8 py-4 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  )
}