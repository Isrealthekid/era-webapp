"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the ERA program?",
    a: "ERA — Engineering Resources Academy — is a Lagos-based professional development organisation that provides intensive, structured programs in technical engineering skills, soft skills development, and direct internship placement with vetted partner companies. Our flagship six-month program combines hands-on training across civil, mechanical, and electrical engineering disciplines with workplace skills that employers demand.",
  },
  {
    q: "Who can apply to ERA?",
    a: "ERA is open to engineering graduates (civil, mechanical, electrical, and building engineering), NYSC members, and early-career engineers with 0–3 years of experience. Whether you are a fresh graduate seeking your first placement or a working engineer looking to close a skills gap, ERA provides the platform, mentors, and industry connections to move your career forward.",
  },
  {
    q: "How does the internship placement work?",
    a: "After completing your technical and soft skills training, ERA places you with one of our 20+ vetted partner companies for a 6-month internship. Placements are matched to your engineering discipline and career goals. Over 95% of our interns receive full-time offers from their placement companies.",
  },
  {
    q: "What short courses do you offer?",
    a: "We offer focused short courses in AutoCAD & Civil Engineering Drawing, Project Management for Engineers, Structural Analysis & Design, Construction Site Supervision, Quantity Surveying & Cost Estimation, and HVAC & Mechanical Building Services. Courses run in hybrid, online, and physical formats throughout the year.",
  },
  {
    q: "Where are you located?",
    a: "ERA is located on the 3rd Floor, Oshopey Plaza, Allen Avenue, Ikeja, Lagos. Our physical training sessions and site visits take place across active construction projects in Lagos. Online and hybrid courses are available to participants across Nigeria.",
  },
];

const FAQContent = () => {
  return (
    <section className="min-h-screen bg-era-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block rounded-full bg-lime px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-era-gray-900 mb-6">
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-[1.1] mb-4">
              Frequently Asked{" "}
              <em className="text-lime italic">Questions</em>
            </h1>
            <p className="text-era-gray-400 text-lg mb-10 max-w-md">
              Everything you need to know about ERA's programs, placement process, and how to get started.
            </p>

            {/* Still Have Questions card */}
            <div className="glass rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="font-display text-xl text-white mb-2">Still have questions?</h3>
              <p className="text-era-gray-400 text-sm mb-4">
                Can't find what you're looking for? Reach out directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-lime font-medium text-sm hover:gap-3 transition-all"
              >
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right column — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-era-gray-700 bg-era-gray-800/50 px-6 data-[state=open]:bg-era-gray-800"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-era-gray-400 pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQContent;
