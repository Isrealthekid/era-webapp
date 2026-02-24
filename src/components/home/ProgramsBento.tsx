import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import technicalImg from "@/assets/technical-training.jpg";
import softSkillsImg from "@/assets/soft-skills.jpg";
import internshipImg from "@/assets/internship.jpg";

const programs = [
  {
    title: "Technical Training",
    description: "Hands-on training in structural detailing, setting out, concrete volume calculation, formwork design, and site supervision for civil and mechanical engineers.",
    image: technicalImg,
    large: true,
  },
  {
    title: "Soft Skills Development",
    description: "Communication, project management, teamwork, and leadership skills essential for the building environment.",
    image: softSkillsImg,
    large: false,
  },
  {
    title: "Internship Placement",
    description: "6-month placements with our 20+ partner construction and engineering firms for real-world site experience.",
    image: internshipImg,
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
              className={`rounded-2xl overflow-hidden relative hover-lift ${prog.large ? "md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <img src={prog.image} alt={prog.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="relative z-10 bg-gradient-to-t from-era-gray-900/90 via-era-gray-900/40 to-transparent p-8 flex flex-col justify-end min-h-[240px] h-full">
                <h3 className="font-display text-2xl text-white mb-2">{prog.title}</h3>
                <p className="text-white/80 text-sm">{prog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsBento;
