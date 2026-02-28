"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Building2, Clock, GraduationCap, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const deptBadgeColors: Record<string, string> = {
  "Civil Engineering": "bg-blue-50 text-blue-700 border-blue-200",
  "Mechanical Engineering": "bg-orange-50 text-orange-700 border-orange-200",
  "Electrical Engineering": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Building Project Management": "bg-purple-50 text-purple-700 border-purple-200",
};

interface Position {
  id: string;
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  mode: string;
  level: string;
  salary: string;
  postedDate: string;
  closingDate: string;
  published: boolean;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  howToApply: string;
}

interface CareerDetailContentProps {
  position: Position;
}

const CareerDetailContent = ({ position }: CareerDetailContentProps) => {
  const applyUrl = `mailto:info@era.com.ng?subject=Application – ${encodeURIComponent(position.title)}&body=Dear ERA Team,%0A%0AI am writing to apply for the ${encodeURIComponent(position.title)} role.%0A%0AName:%0APhone:%0AYears of experience:`;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} /> Back to Careers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className={cn("mb-4 border text-xs", deptBadgeColors[position.department] || "")}>
              {position.department}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{position.title}</h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="outline">{position.type}</Badge>
              <Badge variant="outline">{position.mode}</Badge>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">About This Role</h2>
                <p className="text-muted-foreground leading-relaxed">{position.summary}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Responsibilities</h2>
                <ul className="space-y-2">
                  {position.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {position.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">What You'll Gain</h2>
                <ul className="space-y-2">
                  {position.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">How to Apply</h2>
                <p className="text-muted-foreground mb-4">{position.howToApply}</p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href={applyUrl}>Apply via Email →</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right column — Info card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg text-foreground mb-4">Job Details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Department</p>
                    <p className="text-muted-foreground">{position.department}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Employment Type</p>
                    <p className="text-muted-foreground">{position.type}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{position.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Work Mode</p>
                    <p className="text-muted-foreground">{position.mode}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Experience Level</p>
                    <p className="text-muted-foreground">{position.level}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Closing Date</p>
                    <p className="text-muted-foreground">{position.closingDate}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Salary</p>
                <p className="font-display text-xl text-foreground">{position.salary}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetailContent;
