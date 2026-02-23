import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import trainings from "@/data/trainings.json";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const modeBadgeColors: Record<string, string> = {
  hybrid: "bg-purple-100 text-purple-700 border-purple-200",
  online: "bg-accent text-accent-foreground border-primary/20",
  physical: "bg-orange-100 text-orange-700 border-orange-200",
};

const TrainingsStrip = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Upcoming Trainings"
          title="Enrol in our next cohort"
          subtitle="Intensive, project-based programmes designed with industry partners."
        />
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-5 px-4 md:px-8 w-max">
          {trainings.filter(t => t.published).map((t) => (
            <Link
              key={t.id}
              to={`/trainings/${t.slug}`}
              className="w-72 shrink-0 rounded-2xl bg-card border border-border overflow-hidden hover-lift group"
            >
              <div className="aspect-[4/3] bg-secondary relative">
                <img src={t.flyer} alt={t.title} className="w-full h-full object-cover" />
                <Badge className={cn("absolute top-3 left-3 border text-xs", modeBadgeColors[t.mode] || "")}>
                  {t.mode}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground mb-1 line-clamp-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.duration} · {t.seatsAvailable} seats left</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-foreground">₦{t.price.toLocaleString()}</span>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/trainings"
            className="w-72 shrink-0 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ArrowRight size={24} />
            <span className="font-medium">View All Trainings</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingsStrip;
