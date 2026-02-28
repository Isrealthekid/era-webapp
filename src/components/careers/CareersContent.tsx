"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import positions from "@/data/positions.json";

const departments = ["All", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Building Project Management"];

const deptBadgeColors: Record<string, string> = {
  "Civil Engineering": "bg-blue-50 text-blue-700 border-blue-200",
  "Mechanical Engineering": "bg-orange-50 text-orange-700 border-orange-200",
  "Electrical Engineering": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Building Project Management": "bg-purple-50 text-purple-700 border-purple-200",
};

const CareersContent = () => {
  const [activeDept, setActiveDept] = useState("All");
  const published = positions.filter((p) => p.published);
  const filtered = activeDept === "All" ? published : published.filter((p) => p.department === activeDept);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Join the ERA Network"
          title="Work on real projects. Build a real career."
          subtitle="We connect talented engineers with opportunities that match their skills and ambitions."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeDept === dept
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              )}
            >
              {dept === "Building Project Management" ? "Project Mgmt" : dept}
            </button>
          ))}
        </div>

        {/* Position cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((pos, i) => {
              const isClosingSoon = new Date(pos.closingDate).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000;
              return (
                <motion.div
                  key={pos.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={`/careers/${pos.slug}`}
                    className="block rounded-2xl bg-card border border-border p-6 hover-lift group h-full"
                  >
                    <Badge className={cn("mb-3 border text-xs", deptBadgeColors[pos.department] || "")}>
                      {pos.department}
                    </Badge>
                    <h3 className="font-display text-xl text-foreground mb-2">{pos.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Briefcase size={12} /> {pos.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} /> {pos.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} /> {pos.mode}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{pos.summary}</p>
                    <div className="flex items-center justify-between mt-auto">
                      {isClosingSoon && (
                        <Badge variant="destructive" className="text-xs">Closing Soon</Badge>
                      )}
                      <span className="text-primary text-sm font-medium flex items-center gap-1 ml-auto group-hover:gap-2 transition-all">
                        View <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CareersContent;
