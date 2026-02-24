import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import SectionHeading from "@/components/SectionHeading";

import testimonialDefault from "@/assets/testimonial-default.png";
import testimonialTofunmi from "@/assets/testimonial-tofunmi.jpeg";
import testimonialHamzah from "@/assets/testimonial-hamzah.jpg";
import testimonialWright from "@/assets/testimonial-wright.jpg";

const avatarMap: Record<string, string> = {
  "testimonial-default": testimonialDefault,
  "testimonial-tofunmi": testimonialTofunmi,
  "testimonial-hamzah": testimonialHamzah,
  "testimonial-wright": testimonialWright,
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Testimonials"
          title="What our graduates say"
          subtitle="Real stories from civil and mechanical engineers who launched their careers at ERA."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="rounded-2xl bg-card border border-border p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Quote size={24} className="text-primary/30 mb-3" />
              <p className="text-foreground mb-5 leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img src={avatarMap[t.avatar] || testimonialDefault} alt={t.name} className="w-10 h-10 rounded-full bg-secondary object-cover" />
                <div>
                  <p className="font-medium text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.cohort}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
