"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactContent = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.open(`mailto:info@era.com.ng?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Contact" title="Get in touch" subtitle="Have a question? We'd love to hear from you." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><Label>Name</Label><Input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your name" required /></div>
            <div><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" required /></div>
            <div><Label>Phone</Label><Input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+234..." /></div>
            <div><Label>Message</Label><Textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Your message..." rows={5} required /></div>
            <Button type="submit" className="rounded-full w-full" size="lg">Send Message</Button>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-secondary p-8">
              <h3 className="font-display text-xl text-foreground mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Mail size={18} className="text-primary mt-0.5" /><div><p className="font-medium text-foreground">Email</p><a href="mailto:info@era.com.ng" className="text-sm text-muted-foreground hover:text-primary">info@era.com.ng</a></div></li>
                <li className="flex items-start gap-3"><Phone size={18} className="text-primary mt-0.5" /><div><p className="font-medium text-foreground">Phone</p><p className="text-sm text-muted-foreground">+234 800 000 0000</p></div></li>
                <li className="flex items-start gap-3"><MapPin size={18} className="text-primary mt-0.5" /><div><p className="font-medium text-foreground">Address</p><p className="text-sm text-muted-foreground">Lagos, Nigeria</p></div></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary aspect-video flex items-center justify-center text-muted-foreground text-sm">
              Map placeholder — embed Google Maps here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
