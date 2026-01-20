import Image from 'next/image'
import { Play, Clock, Users, Award } from 'lucide-react'

const workoutPrograms = [
  {
    id: 1,
    title: 'Strength Building Fundamentals',
    duration: '8 weeks',
    level: 'Beginner',
    participants: '2.5k+',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    description: 'Master the basics of strength training with progressive overload techniques.'
  },
  {
    id: 2,
    title: 'HIIT Cardio Blast',
    duration: '4 weeks',
    level: 'Intermediate',
    participants: '1.8k+',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    description: 'High-intensity interval training to maximize fat burn and cardiovascular health.'
  },
  {
    id: 3,
    title: 'Advanced Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    participants: '950+',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop',
    description: 'Elite powerlifting techniques for serious strength athletes and competitors.'
  }
]

const stats = [
  { icon: Users, value: '10k+', label: 'Active Members' },
  { icon: Play, value: '500+', label: 'Workout Videos' },
  { icon: Award, value: '95%', label: 'Success Rate' },
  { icon: Clock, value: '24/7', label: 'Access' }
]

export default function TrainingLab() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            The Training Lab
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Access our comprehensive library of workout programs, training videos, and expert guidance
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Workout Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workoutPrograms.map((program) => (
            <div key={program.id} className="bg-slate-800 rounded-2xl overflow-hidden group hover:bg-slate-700 transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-primary text-slate-900 p-4 rounded-full">
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                    {program.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {program.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {program.participants}
                  </div>
                </div>
                
                <button className="w-full bg-primary text-slate-900 font-bold py-3 uppercase tracking-wider hover:bg-white transition-colors">
                  Start Program
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-transparent border-2 border-primary text-primary font-bold px-8 py-4 uppercase tracking-widest hover:bg-primary hover:text-slate-900 transition-all">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  )
}