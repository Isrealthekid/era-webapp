import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import trainings from "@/data/trainings.json";

const modes = ["All", "online", "physical", "hybrid"];
const modeBadgeColors: Record<string, string> = {
  hybrid: "bg-purple-100 text-purple-700 border-purple-200",
  online: "bg-accent text-accent-foreground border-primary/20",
  physical: "bg-orange-100 text-orange-700 border-orange-200",
};

const Trainings = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? trainings.filter(t => t.published) : trainings.filter(t => t.published && t.mode === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading tag="Training Programs" title="Find the right programme for you" subtitle="Filter by mode to find what fits your schedule." />

          <div className="flex justify-center gap-2 mb-10">
            {modes.map((m) => (
              <button
                key={m}
                onClick={() => setFilter(m)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize",
                  filter === m ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-border"
                )}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/trainings/${t.slug}`}
                  className="block rounded-2xl bg-card border border-border overflow-hidden hover-lift group"
                >
                  <div className="aspect-[4/3] bg-secondary relative">
                    <img src={t.flyer} alt={t.title} className="w-full h-full object-cover" />
                    <Badge className={cn("absolute top-3 left-3 border text-xs", modeBadgeColors[t.mode] || "")}>
                      {t.mode}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-foreground mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{t.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-foreground">₦{t.price.toLocaleString()}</span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
