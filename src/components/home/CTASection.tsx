"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-era-gray-900 py-20 md:py-28">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-era-gray-900 to-era-gray-900" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Floating accent dots */}
      <div className="absolute top-16 right-[20%] w-3 h-3 rounded-full bg-lime animate-float" />
      <div className="absolute bottom-20 left-[15%] w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-[10%] w-4 h-4 rounded-full bg-lime/40 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Launch Your
            <br />
            <span className="text-lime">Engineering Career.</span>
          </h2>
          <p className="text-era-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Join hundreds of civil and mechanical engineering graduates who've transitioned from classroom theory to real-world site experience with ERA.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-lime text-era-gray-900 hover:bg-lime/90 hover:shadow-[0_0_24px_hsl(var(--lime)/0.4)] font-semibold text-base px-8 transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:info@era.com.ng?subject=Join%20Program">
                Join Next Cohort <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full border-era-gray-600 text-primary hover:text-white hover:bg-era-gray-800 hover:border-era-gray-400 font-semibold text-base px-8 transition-all duration-300 hover:scale-105"
            >
              <Link href="/trainings">Explore Trainings</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
