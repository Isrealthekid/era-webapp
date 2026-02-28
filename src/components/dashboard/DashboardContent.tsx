"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Image as ImageIcon, FileText, GraduationCap, Upload, Trash2, Briefcase } from "lucide-react";
import trainings from "@/data/trainings.json";
import blogs from "@/data/blogs.json";
import gallery from "@/data/gallery.json";
import positions from "@/data/positions.json";

const CORRECT_PIN = process.env.NEXT_PUBLIC_DASHBOARD_PIN || "123456";

const DashboardContent = () => {
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const [localTrainings, setLocalTrainings] = useState(trainings);
  const [localBlogs, setLocalBlogs] = useState(blogs);
  const [localGallery, setLocalGallery] = useState(gallery);
  const [localPositions, setLocalPositions] = useState(positions);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("era_dash_auth") === "1") {
      setAuthed(true);
    }
  }, []);

  const handlePin = () => {
    if (pin === CORRECT_PIN) {
      sessionStorage.setItem("era_dash_auth", "1");
      setAuthed(true);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setPin("");
    }
  };

  useEffect(() => {
    if (pin.length === 6) handlePin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <span className="font-display text-4xl text-primary">ERA</span>
          <h1 className="font-display text-2xl text-foreground mt-4 mb-2">Dashboard Access</h1>
          <p className="text-sm text-muted-foreground mb-8">Enter your 6-digit PIN to continue</p>
          <motion.div animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }}>
            <InputOTP maxLength={6} value={pin} onChange={setPin}>
              <InputOTPGroup>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot key={i} index={i} className={error ? "border-destructive" : ""} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </motion.div>
          {error && <p className="text-destructive text-sm mt-3">Incorrect PIN. Try again.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <span className="font-display text-2xl text-primary">ERA Dashboard</span>
        <Button variant="ghost" size="sm" onClick={() => { sessionStorage.removeItem("era_dash_auth"); setAuthed(false); }}>Logout</Button>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gallery">
          <TabsList className="mb-6">
            <TabsTrigger value="gallery" className="gap-2"><ImageIcon size={16} /> Gallery</TabsTrigger>
            <TabsTrigger value="blog" className="gap-2"><FileText size={16} /> Blog Posts</TabsTrigger>
            <TabsTrigger value="trainings" className="gap-2"><GraduationCap size={16} /> Trainings</TabsTrigger>
            <TabsTrigger value="positions" className="gap-2"><Briefcase size={16} /> Open Positions</TabsTrigger>
          </TabsList>

          {/* Gallery */}
          <TabsContent value="gallery">
            <div className="rounded-2xl border-2 border-dashed border-border p-12 text-center mb-6">
              <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">Drag & drop images here (upload logic coming soon)</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {localGallery.map((img) => (
                <div key={img.id} className="relative group rounded-xl overflow-hidden bg-secondary aspect-square">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <button
                    onClick={() => setLocalGallery(g => g.filter(x => x.id !== img.id))}
                    className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Blog */}
          <TabsContent value="blog">
            <div className="rounded-2xl border border-border p-6 mb-6">
              <h3 className="font-display text-lg mb-4">New Blog Post</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div><Label>Title</Label><Input placeholder="Post title" /></div>
                <div><Label>Category</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Career">Career</SelectItem>
                      <SelectItem value="Skills">Skills</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="News">News</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Author</Label><Input placeholder="Author name" /></div>
                <div><Label>Cover Image URL</Label><Input placeholder="/placeholder.svg" /></div>
              </div>
              <div className="mb-4"><Label>Excerpt</Label><Input placeholder="Short description..." /></div>
              <div className="mb-4"><Label>Content (Markdown)</Label><Textarea placeholder="Write your post..." rows={8} /></div>
              <Button className="rounded-full">Publish Post</Button>
            </div>
            <div className="space-y-3">
              {localBlogs.map((b) => (
                <div key={b.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div>
                    <p className="font-medium text-foreground">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.category} · {b.date}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setLocalBlogs(bs => bs.filter(x => x.id !== b.id))}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Trainings */}
          <TabsContent value="trainings">
            <div className="rounded-2xl border border-border p-6 mb-6">
              <h3 className="font-display text-lg mb-4">New Training</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div><Label>Title</Label><Input placeholder="Training title" /></div>
                <div><Label>Instructor</Label><Input placeholder="Instructor name" /></div>
                <div><Label>Price (₦)</Label><Input type="number" placeholder="150000" /></div>
                <div><Label>Duration</Label><Input placeholder="12 Weeks" /></div>
                <div><Label>Start Date</Label><Input type="date" /></div>
                <div><Label>Seats</Label><Input type="number" placeholder="30" /></div>
                <div>
                  <Label>Mode</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="physical">Physical</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Flyer URL</Label><Input placeholder="/placeholder.svg" /></div>
              </div>
              <div className="mb-4"><Label>Description</Label><Textarea placeholder="Brief description..." rows={3} /></div>
              <div className="mb-4"><Label>Full Details</Label><Textarea placeholder="Detailed info..." rows={5} /></div>
              <div className="flex items-center gap-2 mb-4">
                <Switch id="published" />
                <Label htmlFor="published">Published</Label>
              </div>
              <Button className="rounded-full">Save Training</Button>
            </div>
            <div className="space-y-3">
              {localTrainings.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div>
                    <p className="font-medium text-foreground">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.mode} · {t.duration} · ₦{t.price.toLocaleString()}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setLocalTrainings(ts => ts.filter(x => x.id !== t.id))}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Positions */}
          <TabsContent value="positions">
            <div className="rounded-2xl border border-border p-6 mb-6">
              <h3 className="font-display text-lg mb-4">New Position</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div><Label>Position Title</Label><Input placeholder="Civil Engineer – Site Supervision" /></div>
                <div>
                  <Label>Department</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                      <SelectItem value="Building Project Management">Building Project Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Employment Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Location</Label><Input placeholder="Lagos, Nigeria" defaultValue="Lagos, Nigeria" /></div>
                <div>
                  <Label>Work Mode</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="On-site">On-site</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Experience Level</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entry-level / Graduate">Entry-level / Graduate</SelectItem>
                      <SelectItem value="Junior / 1–3 years">Junior / 1–3 years</SelectItem>
                      <SelectItem value="Mid-level / 3–5 years">Mid-level / 3–5 years</SelectItem>
                      <SelectItem value="Senior / 5+ years">Senior / 5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Salary</Label><Input placeholder="Competitive" /></div>
                <div><Label>Closing Date</Label><Input type="date" /></div>
              </div>
              <div className="mb-4"><Label>Role Summary</Label><Textarea placeholder="Brief summary shown on the card..." rows={3} /></div>
              <div className="flex items-center gap-2 mb-4">
                <Switch id="pos-published" />
                <Label htmlFor="pos-published">Publish Position</Label>
              </div>
              <Button className="rounded-full">Save Position</Button>
            </div>

            {/* Positions list */}
            <div className="space-y-3">
              {localPositions.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div>
                    <p className="font-medium text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {p.department} · {p.published ? "✅ Live" : "⏸ Draft"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLocalPositions(ps => ps.map(x => x.id === p.id ? { ...x, published: !x.published } : x))}
                    >
                      {p.published ? "Unpublish" : "Publish"}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setLocalPositions(ps => ps.filter(x => x.id !== p.id))}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardContent;
