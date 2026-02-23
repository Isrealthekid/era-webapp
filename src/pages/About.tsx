import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To bridge the gap between academic knowledge and industry-ready skills by providing world-class technical training and mentorship to aspiring engineers across Africa." },
  { icon: Eye, title: "Vision", desc: "To become Africa's leading engineering academy, producing a generation of highly skilled, innovative, and employable engineers." },
  { icon: Heart, title: "Values", desc: "Excellence, Integrity, Community, Innovation — these core values guide everything we do, from curriculum design to student support." },
  { icon: Users, title: "Community", desc: "Our 500+ alumni network spans 20+ companies. Graduates support each other through mentorship, referrals, and knowledge sharing." },
];

const team = [
  { name: "Dr. Amara Obi", role: "Founder & Lead Instructor", bio: "15 years in software engineering, passionate about education reform in Africa." },
  { name: "Engr. Kola Adeyemi", role: "Data Engineering Lead", bio: "Former senior engineer at a Fortune 500 company, now dedicated to training the next generation." },
  { name: "Prof. Ngozi Ibe", role: "Embedded Systems Lead", bio: "PhD in Electrical Engineering, pioneer of IoT education in West Africa." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tag="About ERA"
            title="Building Africa's engineering future"
            subtitle="ERA Academy was founded with a single belief: that talent is evenly distributed, but opportunity is not."
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
