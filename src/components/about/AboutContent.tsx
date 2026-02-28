"use client";

import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To bridge the gap between academic training and industry readiness for engineers and graduates in Nigeria by providing intensive, structured programs in technical engineering skills, soft skills development, and direct internship placement with vetted partner companies." },
  { icon: Eye, title: "Vision", desc: "To become Nigeria's leading engineering resource academy, producing a generation of highly skilled, site-ready, and employable graduate engineers across civil, mechanical, and electrical disciplines." },
  { icon: Heart, title: "Values", desc: "Excellence, Integrity, Community, Innovation — these core values guide everything we do, from curriculum design to internship placements on real construction sites across Lagos." },
  { icon: Users, title: "Community", desc: "Our 500+ alumni network spans 20+ construction and engineering companies including Calebella Integritas Projects Ltd, Black Diamond Engineering Limited, El Fad, MBS, and MW. Graduates support each other through mentorship, referrals, and knowledge sharing." },
];

const team = [
  { name: "Engr. Abiodun Adeyemi", role: "Founder & Lead Instructor", bio: "Structural engineer with over 15 years of experience in building construction and graduate training across civil and mechanical engineering disciplines." },
  { name: "Engr. Kola Adeyemi", role: "Civil Engineering Lead", bio: "Specialist in structural detailing, setting out, concrete volume calculation, and site supervision with extensive experience on commercial and residential projects." },
  { name: "Engr. Ngozi Ibe", role: "Mechanical Systems Lead", bio: "Expert in building services engineering, HVAC systems, plumbing design, and fire protection for commercial projects across Lagos." },
];

const AboutContent = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="About ERA"
          title="Building Nigeria's engineering future"
          subtitle="ERA — Engineering Resources Academy — is a Lagos-based professional development organisation dedicated to bridging the gap between academic training and industry readiness for engineers and graduates in Nigeria."
        />

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="rounded-2xl bg-card border border-border p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a clear mission, ERA provides intensive, structured programs in technical engineering skills, soft skills development, and direct internship placement with vetted partner companies. Operating from the 3rd Floor of Oshopey Plaza, Allen Avenue, Ikeja, ERA has trained over 500 engineers and graduates annually, achieving a 95% employment rate within three months of program completion — a result that reflects the depth of both its curriculum and its network of 20+ industry partners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ERA's flagship six-month program combines hands-on technical training across civil, mechanical, and electrical engineering disciplines with the workplace communication and project management skills that employers consistently demand. Participants work on real construction and engineering projects under the mentorship of practising engineers, gaining experience in structural drawing interpretation, concrete volume calculation, site management, AutoCAD, and project coordination — the exact competencies that ERA's partner firms rely on.
            </p>
          </motion.div>
        </div>

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
  );
};

export default AboutContent;
