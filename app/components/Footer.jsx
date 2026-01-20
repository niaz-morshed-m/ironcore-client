import { Dumbbell, Globe, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="text-primary w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              IRONCORE<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            The ultimate destination for premium gym equipment. We provide the tools, you provide the work. 
            Built for those who refuse to settle.
          </p>
          <div className="flex gap-4">
            <a className="h-10 w-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary hover:text-slate-900 transition-colors" href="#">
              <Globe className="w-5 h-5" />
            </a>
            <a className="h-10 w-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary hover:text-slate-900 transition-colors" href="#">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="h-10 w-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary hover:text-slate-900 transition-colors" href="#">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-white text-sm font-bold uppercase mb-6 tracking-widest">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Home Gym Kits</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Dumbbells & Weights</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Cardio Machines</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Yoga & Recovery</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-white text-sm font-bold uppercase mb-6 tracking-widest">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Affiliates</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-white text-sm font-bold uppercase mb-6 tracking-widest">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Returns & Refunds</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-xs">
        <p>© 2024 IronCore Fitness. All Rights Reserved. Designed for performance.</p>
      </div>
    </footer>
  )
}