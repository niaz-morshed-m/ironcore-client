import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display overflow-x-hidden">
      {/* Grain Overlay for Texture */}
      <div className="fixed inset-0 grain-overlay z-50"></div>
<div>
  <Header></Header>
</div>
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlIPa6eQiZ8IFaJmvBsi5Dp4TTBZRzbMvEt591gR6TDZgwJqaEwBgb0uBYjAD9mKaYO_GmZ7siAKjTaqNUrtNzuh2_bf2lahnEbKOiLY_s9ni9qKGSDgKCTDSAopAQWAwXMhnh6aowoPWG33T_REU0Ceal17Y65QGGlHE02rabc-VGvxuXnycWkxQkk4zr6EpixG7NZfPAmjlx5xJt5hbe-3kY_ZJDxp6fhr0VkCvUBl--RldNgWb3UjyE3q-AAoKaewm9-na1Q"
              alt="Gritty industrial gym with heavy iron weights and squat racks"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-4xl">
            <div className="inline-block px-3 py-1 bg-primary text-background-dark text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
              EST. 2012 / CHICAGO IL
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-white">
              OUR MISSION: <br/>
              <span className="text-primary">FORGING</span> STRONGER LIVES
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just sell equipment. We build the industrial-grade tools for those who live for the relentless pursuit of strength.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-primary uppercase tracking-[0.2em] text-sm font-bold">The Blueprint</h3>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
                  Born in the <br/>Dungeon
                </h2>
              </div>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed border-l-2 border-primary/30 pl-8">
                <p>
                  IronCore didn&apos;t start in a boardroom. It started in a humid, 600-square-foot garage in Chicago&apos;s South Side. We were tired of &quot;commercial-grade&quot; equipment that rattled under heavy loads and failed after a year of abuse.
                </p>
                <p>
                  Our founder, Marcus Thorne, began welding his own racks and casting his own plates to withstand the sheer volume of powerlifting and strongman training. What began as a necessity became a standard.
                </p>
                <p className="text-white font-medium">
                  Today, IronCore provides the same uncompromising steel to garage gyms, performance centers, and elite athletes worldwide.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 z-0"></div>
              <div className="relative z-10 overflow-hidden bg-surface-dark">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACEtNM4ZAXIRt7k_RAaaDfrIE7mxLWIsj51VaVqwFIMrDHu7hbmpeRa0ZuLZ0-TcPBSI53fBTsMOROCCT-UZ7aELtUevYLFObHV29oVtP8opw9jqcvwBI1mukYJfRFF1kYYmpHyyCJhEW_yXIcMgtnCkHo-dUDKAE4JKTHRzgGegNTgZrUPUfRT2uM_bzADMbusc3o9uTWC0HrJR-tuwnrWDiyY7Y1Q6NhjNC2E46MtaANXMte1sJrNlm1cKK73ITfn5XWt96neg"
                  alt="Detail shot of a heavy steel barbell with iron plates"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">verified</span>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-widest text-sm">Quality Guarantee</p>
                      <p className="text-xs text-white/50 uppercase">Tested to 1,500lbs failure point</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-surface-dark py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 hazard-border opacity-30"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Core Principles</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-background-dark p-10 border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 mb-8 flex items-center justify-center bg-primary/10 rounded-sm">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                    precision_manufacturing
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">Innovation</h3>
                <p className="text-white/50 leading-relaxed">
                  We use advanced FEA (Finite Element Analysis) to stress-test every weld before a single piece of steel is cut. Engineering for the extremes.
                </p>
              </div>
              {/* Durability */}
              <div className="bg-background-dark p-10 border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 mb-8 flex items-center justify-center bg-primary/10 rounded-sm">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                    rebase_edit
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">Durability</h3>
                <p className="text-white/50 leading-relaxed">
                  Machined from American steel. We don&apos;t use plastic caps or thin-walled tubing. Our gear is built to outlast the person using it.
                </p>
              </div>
              {/* Community */}
              <div className="bg-background-dark p-10 border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-16 h-16 mb-8 flex items-center justify-center bg-primary/10 rounded-sm">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                    groups
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">Community</h3>
                <p className="text-white/50 leading-relaxed">
                  IronCore isn&apos;t just a label; it&apos;s a tribe. We support independent gyms and athletes who keep the culture of hard work alive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter">The Iron Council</h2>
              <p className="text-white/50 mt-2 uppercase tracking-[0.1em] text-sm">
                Engineers, Coaches, and Competitive Athletes
              </p>
            </div>
            <div className="h-px flex-grow mx-8 bg-white/10 hidden md:block"></div>
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dark mb-4 border border-white/5 group-hover:border-primary transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyVjXWn0MNdXWjkpd8-Lll2vWmUeQaWvXFrshDbRXfAWlFROAc65Ye515FS8JBGWYz_RFdjc3CC9KehaFEgGUmcVOgGmy_GJmNu5gY73XaEuX1dp2bT0FfklgUiN_-4YVSD9iLUmflbSL20pQpq_pg2dhjRhmQVGER2fCmHMwVQ46HEVjXyPv6T0BYUH7nuwqT0raS8VGyClxzl0fOf_DSg3I_JJLjZhyJlGwGTIKATA-G1hsGZR7b6rkMfBl1sIc3kDx4qtcZIA"
                  alt="Marcus Thorne, Founder of IronCore Fitness"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight">Marcus Thorne</h4>
              <p className="text-primary text-xs uppercase font-bold tracking-widest mt-1">
                Founder & Chief Engineer
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dark mb-4 border border-white/5 group-hover:border-primary transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHRcRtrFSg2XqlVHnTIKA3HQAR3VN_xn9y2tQ4lxm4z7h4CVd76tfIV_5c0R-a1mOl_SYdOaTNN_G8O-rYOkmdLZoDE14A8AsBDnrl_TFaPxDNa0TNk1l4bAy3KZpIecoTWooGzoWRMXI9ZXifC39xKmR5e8tiKTE2nJfQ31n3Hn4ljQnP7gQ-85qJjJ_-P7rQ8uOuXD15QszDHMnjawIBg-aW2E6ETGP25LUJYNJIhr_8l5NiEhwdiKwwWt1pdzZfVk6yYikPnw"
                  alt="Elena Vance, Head of Product Design"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight">Elena Vance</h4>
              <p className="text-primary text-xs uppercase font-bold tracking-widest mt-1">
                Structural Engineer
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dark mb-4 border border-white/5 group-hover:border-primary transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACBlB3r6eWg0-fPWk0fHMnu-vpPH_b_KPrMebOLgWFwizUjUl1ooYfF8afV7SbnU9xtyTMhUDpCfMzR8QyTxgEa7bKRKhkYOkEqytMEPbDQfpcTSP5iJmNgd1VQ9JCKw8zyp9BbdtDWChLkMPkJ3ZTqpmw1xuStQILlGPaPnJ749KZnfivUsKu70GWIoccecDt51bbkZGGa6OT3SKHdGqJwtEjZkHePsNsU-GlUmWa-cin5NGLOrLCothGPNtJEdu-qPNOndiBvw"
                  alt="Jaxson Reed, Strength Specialist"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight">Jaxson Reed</h4>
              <p className="text-primary text-xs uppercase font-bold tracking-widest mt-1">
                Head Strength Coach
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dark mb-4 border border-white/5 group-hover:border-primary transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7uXMfcY6f6ESghI4cW97sCQyq4A6_NFUgzQWLvZQ_kLTAnzMdaF0uTSmhiS6ArU9wq-2hw3QZX-8JpFuMGelhKmRUO7ADDHZWgB1Af2lVFXLvMXEUWMreOcMn3RCD11m2lBAnLoqbHd9q9d9l_FIzJwhqoi_f1w66K13a8FhEoBSskkP8_WPoetxa2ziLTNM_YS6HV2okRSOll4DPOVD-0kIJe6g5QeyZzCWYhV682kt8atz8x9rY0PdYhC3WRAsqH3jOGR--g"
                  alt="Sarah Chen, Community Lead"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight">Sarah Chen</h4>
              <p className="text-primary text-xs uppercase font-bold tracking-widest mt-1">
                Community Relations
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto bg-primary p-12 md:p-20 text-background-dark relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 hazard-border opacity-5"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
                Ready to <br/>level up?
              </h2>
              <p className="text-xl font-medium max-w-xl mx-auto uppercase">
                Join the thousands of athletes training on the toughest equipment in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-background-dark text-white px-10 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-background-dark transition-all">
                  Browse Equipment
                </button>
                <button className="border-2 border-background-dark text-background-dark px-10 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-background-dark hover:text-primary transition-all">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}