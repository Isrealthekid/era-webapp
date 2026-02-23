import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Code2, Users2, Briefcase } from "lucide-react";

const programs = [
  {
    title: "Technical Training",
    description: "Master in-demand engineering skills with hands-on, project-based curricula taught by industry experts.",
    icon: Code2,
    large: true,
  },
  {
    title: "Soft Skills Development",
    description: "Communication, teamwork, and leadership training to complement your technical expertise.",
    icon: Users2,
    large: false,
  },
  {
    title: "Internship Placement",
    description: "Direct placement with our 20+ partner companies for real-world professional experience.",
    icon: Briefcase,
    large: false,
  },
];

const ProgramsBento = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="What We Offer"
          title="Programs designed for your success"
          subtitle="Three pillars of our comprehensive engineering education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              className={`rounded-2xl bg-card border border-border p-8 hover-lift ${prog.large ? "md:row-span-2 flex flex-col justify-center" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <prog.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{prog.title}</h3>
              <p className="text-muted-foreground">{prog.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsBento;
