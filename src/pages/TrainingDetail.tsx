import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Users, Clock, User, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import trainings from "@/data/trainings.json";

const modeBadgeColors: Record<string, string> = {
  hybrid: "bg-purple-100 text-purple-700 border-purple-200",
  online: "bg-accent text-accent-foreground border-primary/20",
  physical: "bg-orange-100 text-orange-700 border-orange-200",
};

const features = [
  "Industry-experienced instructors",
  "Hands-on project-based learning",
  "Certificate of completion",
  "Career placement support",
  "Alumni network access",
  "Lifetime curriculum access",
];

const TrainingDetail = () => {
  const { id } = useParams();
  const training = trainings.find((t) => t.slug === id);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  if (!training) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-display text-3xl mb-4">Training not found</h1>
          <Link to="/trainings" className="text-primary hover:underline">← Back to trainings</Link>
        </div>
      </Layout>
    );
  }

  const handleEnroll = () => {
    const subject = encodeURIComponent(`Enrollment: ${training.title}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nI would like to enrol in ${training.title}.`);
    window.open(`mailto:info@era.com.ng?subject=${subject}&body=${body}`, "_blank");
    setEnrollOpen(false);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/trainings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} /> All Trainings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="aspect-video rounded-2xl bg-secondary overflow-hidden mb-6">
                <img src={training.flyer} alt={training.title} className="w-full h-full object-cover" />
              </div>
              <Badge className={cn("border text-xs mb-3", modeBadgeColors[training.mode] || "")}>{training.mode}</Badge>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{training.title}</h1>
              <p className="text-muted-foreground mb-6">{training.description}</p>

              <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={16} /> Starts {training.startDate}</span>
                <span className="flex items-center gap-1"><Clock size={16} /> {training.duration}</span>
                <span className="flex items-center gap-1"><Users size={16} /> {training.seatsAvailable} seats left</span>
                <span className="flex items-center gap-1"><User size={16} /> {training.instructor}</span>
              </div>

              <h3 className="font-display text-xl text-foreground mb-3">About this programme</h3>
              <p className="text-muted-foreground whitespace-pre-line mb-8">{training.fullDetails}</p>

              <h3 className="font-display text-xl text-foreground mb-3">Syllabus</h3>
              <ol className="space-y-2 mb-8">
                {training.syllabus.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — Enrollment card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-6">
                <div className="rounded-full bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 w-fit mb-4">
                  Most Popular
                </div>
                <p className="font-display text-4xl text-foreground mb-1">₦{training.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mb-6">per participant</p>

                <ul className="space-y-3 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button onClick={() => setEnrollOpen(true)} className="w-full rounded-full" size="lg">
                  Enrol Now
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">Only {training.seatsAvailable} seats remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment modal */}
      <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enrol in {training.title}</DialogTitle>
            <DialogDescription>Fill in your details and we'll get back to you.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div><Label>Name</Label><Input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your full name" /></div>
            <div><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" /></div>
            <div><Label>Phone</Label><Input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+234..." /></div>
          </div>
          <DialogFooter>
            <Button onClick={handleEnroll} className="rounded-full w-full" disabled={!form.name || !form.email}>Submit Enrollment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TrainingDetail;
