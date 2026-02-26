import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Building2, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Engineers Trained" },
  { icon: Briefcase, value: "95%", label: "Employment Rate" },
  { icon: Building2, value: "20+", label: "Partner Companies" },
];

const Hero = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-6">
              Engineering Resources Academy
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground mb-6">
              Great futures are built with proper guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 font-body">
              An organisation dedicated to graduate training and employment opportunities — bridging the gap between university and industry, one engineer at a time.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="mailto:info@era.com.ng?subject=Join%20ERA%20Academy">Join Us</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="mailto:info@era.com.ng?subject=Partnership%20Inquiry">Become a Partner</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <stat.icon size={18} className="text-primary" />
                  <span className="font-display text-lg text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={heroBg} alt="ERA Academy engineers on site" className="w-full h-full object-cover" />
            </div>

            {/* Floating stat card 1 — outside the clipped div */}
            <motion.div
              className="absolute top-6 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/20 z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground leading-none">500+</p>
                <p className="text-xs text-muted-foreground">Graduates</p>
              </div>
            </motion.div>

            {/* Floating stat card 2 — outside the clipped div */}
            <motion.div
              className="absolute bottom-8 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/20 z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground leading-none">95%</p>
                <p className="text-xs text-muted-foreground">Employed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
