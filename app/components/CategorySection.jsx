import Image from 'next/image'

export default function CategorySection() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            Choose What You Want
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyvEXn4jKVFbw35CmL95Zx-SUNGRXGGkBsON5egXp_f_brgwqxwkr8c5ZYAg2S5RS_Ej0zYQGNB22XMBRVg0dpdM56P6-fUfGdW4lQezfgw638I8357Fbe5vOMlBUBnrP6r-X6gGbCjEKhFzdPwWsw4a_rT0nAr1fi5ghrCYYYNli5cj7H63VO9_izPqcORMklur5AVeOYBEATZjMk9vNp6ybhQ3tZwXzX-ojKSwGfOjhVXhLrfruBDyQunC70HyxG0djVT4JIw"
              alt="Home Gym"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-slate-900 font-display font-bold text-xs px-4 py-2 uppercase tracking-widest">
                Home Gym
              </span>
            </div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white font-display text-2xl mb-2">Build Your Sanctuary</h4>
              <p className="text-slate-300 text-sm max-w-xs">
                Everything you need to turn your garage or spare room into a world-class training facility.
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIUriYuyH_pcqIr9OCkLsx8rRgFryFUmwkXicxQ5tAfhSIOBDY5HVp9kWIOR8lZkQJ-qFUoYbeE51nZup8zRjEBdmxECxeavHBduzX7opI0fXEvEWkY7M7rkbKoI3u2Y1gINJhaHHDaL5kpzaw-suPWbwUao8Lecya-27rqU0P_75SjnRUkQDrUg2_W18NHJoIinYySOoHJsz2StwRO0uZae4UIX1yDGbfN4AOBh39jw4P-3YkQlCZ80iOLX9RfuMnXMbqLMxKQ"
              alt="Sit Up Bench"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-slate-900 font-display font-bold text-xs px-4 py-2 uppercase tracking-widest">
                Strength Training
              </span>
            </div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white font-display text-2xl mb-2">Unleash Your Power</h4>
              <p className="text-slate-300 text-sm max-w-xs">
                Precision engineered machines and free weights for maximum hypertrophy and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}