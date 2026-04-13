import { motion } from "framer-motion";
import { MapPin, Clock, Star, Quote, ArrowRight, PlayCircle, UtensilsCrossed, Coffee, Phone } from "lucide-react";
import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Section, SectionHeader } from "@/components/ui/section";
import { useDinerData } from "@/hooks/use-diner-data";
import { cn } from "@/lib/utils";

export default function Home() {
  const { menu, reviews } = useDinerData();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.foxsdiner.com/wp-content/uploads/2024/10/Diner-from-Outside-1.jpg" 
            alt="Fox's Diner exterior on Main Street Munhall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground font-bold text-sm tracking-wider uppercase mb-8 shadow-lg backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            Featured on KDKA PTL Diner Week
            <Star className="w-4 h-4 fill-current" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white text-balance drop-shadow-xl"
          >
            Homemade Comfort Food <br className="hidden md:block" /> 
            <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Since Day One</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            A classic neighborhood staple on Main Street in Munhall, PA. 
            Where portions are generous and everyone is treated like family.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://www.foxsdinerpa.com/order"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-display font-bold text-xl uppercase tracking-wider rounded shadow-[0_0_20px_rgba(206,23,41,0.4)] hover:bg-accent hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Order Online
            </a>
            <a 
              href="#menu"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-display font-bold text-xl uppercase tracking-wider rounded hover:bg-white hover:text-foreground transition-all duration-300 text-center"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-[100%] z-20 translate-y-8 scale-x-110" />
      </section>

      {/* CROWN JEWEL: KDKA FEATURE */}
      <section className="relative z-30 -mt-12 mb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border-4 border-primary/20"
          >
            <div className="bg-primary p-8 md:p-12 lg:w-1/2 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-accent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded mb-6">
                  Voted #1 Final Stop
                </span>
                <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
                  KDKA PTL <br/>Diner Week 2025
                </h2>
                <div className="flex gap-4 items-start mb-8">
                  <Quote className="w-10 h-10 text-white/30 shrink-0" />
                  <p className="text-xl md:text-2xl font-medium italic text-white/90 leading-relaxed">
                    "The food is so good, you may never want to leave!"
                  </p>
                </div>
                <p className="text-white/80 mb-8 font-medium">
                  Hosts Heather Abraham and David Highfield visited our Munhall location and named Fox's Diner the ultimate final stop for Pittsburgh Today Live's Diner Week.
                </p>
                <a 
                  href="https://www.cbsnews.com/pittsburgh/video/foxs-diner-ptl-diner-week/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider hover:text-secondary transition-colors group"
                >
                  <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Watch the CBS Segment
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative bg-black min-h-[300px]">
              <img 
                src="https://assets2.cbsnewsstatic.com/hub/i/r/2025/02/28/b4ba48d2-d1be-4294-a329-5b0a2e9b710c/thumbnail/620x349/3a6c084fa8d75b11605a0ab7fa8105dd/diner-week-foxs.png" 
                alt="Fox's Diner featured on KDKA PTL Diner Week" 
                className="w-full h-full object-cover opacity-80 transition-opacity hover:opacity-100"
              />
              <a 
                href="https://www.cbsnews.com/pittsburgh/video/foxs-diner-ptl-diner-week/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play KDKA video segment"
              >
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white backdrop-blur-md group-hover:bg-primary group-hover:scale-110 transition-all shadow-xl">
                  <PlayCircle className="w-10 h-10 ml-1" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT STORY */}
      <Section id="about" className="bg-background pt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-xl -z-10" />
            <img 
              src="https://www.foxsdiner.com/wp-content/uploads/2024/10/iyldgthzous.jpg" 
              alt="Cooking fresh breakfast at Fox's Diner" 
              className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pl-4"
          >
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Story</h3>
            <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-6">Heart & Soul in Every Plate</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Fox's Diner isn't just a place to eat; it's a neighborhood institution on Main Street in Munhall. We believe in the power of classic American comfort food served with genuine hospitality.
              </p>
              <p>
                When you walk through our doors, you're treated like family. Our staff knows the regulars by name, and we're always excited to welcome new faces. 
              </p>
              <p>
                From our enormous breakfast omelets to our famous Apple Fritter French Toast, every meal comes out hot, fresh, and made with love. It's why we earned 4.5 stars on Google and why KDKA chose us as their #1 stop.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Coffee />
                </div>
                <div className="font-bold text-foreground font-display text-xl">Fresh Daily</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                  <UtensilsCrossed />
                </div>
                <div className="font-bold text-foreground font-display text-xl">Huge Portions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* MENU PREVIEW */}
      <Section id="menu" className="bg-card border-y border-border relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <SectionHeader 
          title="Diner Classics" 
          subtitle="Served Hot & Fresh" 
        />

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 relative z-10">
          
          {/* Breakfast Menu */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-primary">
              <Coffee className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-display text-foreground">Breakfast</h3>
              <span className="ml-auto text-sm font-bold text-muted-foreground uppercase tracking-widest">All Day</span>
            </div>
            
            <ul className="space-y-6">
              {menu.breakfast.map((item, idx) => (
                <li key={idx} className="relative group">
                  <div className="flex items-baseline justify-between menu-dots">
                    <span className={cn(
                      "bg-card pr-4 font-display text-xl z-10 transition-colors",
                      item.highlighted ? "text-primary" : "text-foreground"
                    )}>
                      {item.name}
                      {item.highlighted && <Star className="inline w-4 h-4 ml-2 text-secondary fill-secondary -translate-y-1" />}
                    </span>
                    <span className="bg-card pl-4 font-bold text-lg z-10 text-foreground">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-16">
            {/* Lunch/Dinner Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-primary">
                <UtensilsCrossed className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-display text-foreground">Lunch & Dinner</h3>
              </div>
              
              <ul className="space-y-6">
                {menu.lunchDinner.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-baseline justify-between menu-dots">
                      <span className="bg-card pr-4 font-display text-xl z-10 text-foreground">
                        {item.name}
                      </span>
                      <span className="bg-card pl-4 font-bold text-lg z-10 text-foreground">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Drinks/Desserts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.3 }}
            >
              <h3 className="text-2xl font-display text-foreground mb-6 pb-2 border-b border-border inline-block">Drinks & Sweets</h3>
              <ul className="space-y-4">
                {menu.drinksDesserts.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-bold text-sm bg-muted px-2 py-1 rounded">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.foxsdinerpa.com/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-display font-bold text-xl uppercase tracking-wider rounded-lg shadow-xl hover:bg-primary transition-all duration-300 group"
          >
            See Full Menu & Order
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" className="bg-foreground text-background relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-10 mix-blend-overlay" />
        
        <SectionHeader 
          title="Word on the Street" 
          subtitle="4.5 Stars on Google"
          className="relative z-10 [&>h2]:text-background"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background text-foreground p-8 rounded-xl shadow-lg flex flex-col h-full border-b-4 border-secondary hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 text-secondary mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg italic font-medium mb-6 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
                <span className="font-display font-bold text-lg">{review.author}</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{review.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* LOCATION & HOURS */}
      <Section id="location" className="bg-background">
        <div className="grid lg:grid-cols-2 gap-12 bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-display text-foreground mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground text-lg">3716 Main St<br/>Munhall, PA 15120</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=3716+Main+St+Munhall+PA+15120" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-bold mt-2 inline-block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <table className="w-full text-muted-foreground">
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-medium">Mon - Fri</td>
                        <td className="py-2 text-right">7:00 AM - 7:00 PM</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-medium">Saturday</td>
                        <td className="py-2 text-right">7:00 AM - 2:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Sunday</td>
                        <td className="py-2 text-right text-primary font-bold">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <a href="tel:+14124617345" className="text-xl font-display font-bold text-foreground hover:text-primary transition-colors">
                    (412) 461-7345
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted min-h-[400px] h-full w-full flex flex-col items-center justify-center p-8 text-center gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-foreground mb-1">Fox's Diner</p>
              <p className="text-muted-foreground text-lg">3716 Main St, Munhall, PA 15120</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3716+Main+St+Munhall+PA+15120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-accent transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
            <p className="text-sm text-muted-foreground">On Main Street, just north of Grace Street</p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-16 pb-8 border-t-8 border-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary rounded-full">
                  <UtensilsCrossed size={20} className="text-white" />
                </div>
                <span className="font-display text-3xl font-bold tracking-wider">Fox's Diner</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Munhall's favorite family diner. Serving up huge portions, hot coffee, and a whole lot of heart since day one.
              </p>
              <a 
                href="https://www.facebook.com/foxsdinermunhall/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <div>
              <h4 className="font-display text-xl font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Diner Menu</a></li>
                <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Customer Reviews</a></li>
                <li><a href="https://www.foxsdinerpa.com/order" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline">Order Carryout Online</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-xl font-bold mb-6 text-white uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 font-medium text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>3716 Main St<br/>Munhall, PA 15120</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(412) 461-7345</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Fox's Diner. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-primary text-lg leading-none">♥</span> for Munhall
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
