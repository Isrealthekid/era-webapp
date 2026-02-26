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

const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="shrink-0 w-[380px] rounded-2xl bg-card border border-border p-6">
    <Quote size={20} className="text-primary/30 mb-2" />
    <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">{t.quote}</p>
    <div className="flex items-center gap-3">
      <img
        src={avatarMap[t.avatar] || testimonialDefault}
        alt={t.name}
        className="w-9 h-9 rounded-full bg-secondary object-cover"
      />
      <div>
        <p className="font-medium text-sm text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role} · {t.cohort}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled1 = [...row1, ...row1, ...row1];
  const doubled2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 md:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <SectionHeading
          tag="Testimonials"
          title="What our graduates say"
          subtitle="Real stories from civil and mechanical engineers who launched their careers at ERA."
        />
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <div className="flex gap-4 animate-marquee w-max">
          {doubled1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div>
        <div className="flex gap-4 animate-marquee-reverse w-max">
          {doubled2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
