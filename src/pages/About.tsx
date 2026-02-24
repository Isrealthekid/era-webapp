import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To bridge the gap between academic knowledge and industry-ready skills by providing world-class technical training and site placement for civil and mechanical engineers in the building environment." },
  { icon: Eye, title: "Vision", desc: "To become Nigeria's leading engineering resource academy, producing a generation of highly skilled, site-ready, and employable graduate engineers." },
  { icon: Heart, title: "Values", desc: "Excellence, Integrity, Community, Innovation — these core values guide everything we do, from curriculum design to internship placements on real construction sites." },
  { icon: Users, title: "Community", desc: "Our 500+ alumni network spans 20+ construction and engineering companies. Graduates support each other through mentorship, referrals, and knowledge sharing." },
];

const team = [
  { name: "Engr. Abiodun Adeyemi", role: "Founder & Lead Instructor", bio: "Structural engineer with over 15 years of experience in building construction and graduate training." },
  { name: "Engr. Kola Adeyemi", role: "Civil Engineering Lead", bio: "Specialist in structural detailing, setting out, and site supervision with extensive industry experience." },
  { name: "Engr. Ngozi Ibe", role: "Mechanical Systems Lead", bio: "Expert in building services engineering, HVAC systems, and plumbing design for commercial projects." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tag="About ERA"
            title="Building Nigeria's engineering future"
            subtitle="ERA Academy was founded with a single belief: that talent is evenly distributed, but opportunity is not. We provide graduate engineers with the platform to gain real site experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="rounded-2xl bg-card border border-border p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <v.icon size={28} className="text-primary mb-4" />
                <h3 className="font-display text-2xl text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <SectionHeading tag="Our Team" title="Meet the people behind ERA" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                className="rounded-2xl bg-card border border-border p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4" />
                <h4 className="font-display text-xl text-foreground">{t.name}</h4>
                <p className="text-sm text-primary font-medium mb-2">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
