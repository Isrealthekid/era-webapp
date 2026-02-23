import { motion } from "framer-motion";
import { Users, TrendingUp, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Users, value: "500+", label: "Engineers Trained", span: "col-span-2 md:col-span-1" },
  { icon: TrendingUp, value: "95%", label: "Employment Rate", span: "col-span-2 md:col-span-1" },
  { icon: Building2, value: "20+", label: "Partner Companies", span: "col-span-2 md:col-span-1" },
  { icon: Clock, value: "6 Mo", label: "Intensive Program", span: "col-span-2 md:col-span-1" },
];

const BentoStats = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Our Impact"
          title="Numbers that speak for themselves"
          subtitle="We measure our success by the success of our graduates."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`${stat.span} rounded-2xl bg-secondary p-6 md:p-8 text-center hover-lift`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <stat.icon size={28} className="text-primary mx-auto mb-3" />
              <p className="font-display text-3xl md:text-4xl text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <Button asChild size="lg" className="rounded-full">
            <a href="mailto:info@era.com.ng?subject=Join%20ERA">Join Today</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="mailto:info@era.com.ng?subject=Partnership">Partner With Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BentoStats;
