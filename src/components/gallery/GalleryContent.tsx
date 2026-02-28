"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import gallery from "@/data/gallery.json";

const GalleryContent = () => {
  const [selected, setSelected] = useState<typeof gallery[0] | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Gallery" title="Moments from ERA" subtitle="A glimpse into life at ERA Academy." />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {gallery.map((img, i) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid mb-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(img)}
            >
              <div className="rounded-2xl bg-secondary overflow-hidden hover-lift aspect-square relative">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 px-1">{img.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          {selected && (
            <div className="relative">
              <div className="relative w-full aspect-video">
                <Image src={selected.src} alt={selected.alt} fill className="rounded-2xl object-cover" />
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3 glass rounded-full p-2">
                <X size={18} />
              </button>
              <p className="text-center text-sm text-muted-foreground mt-3">{selected.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalleryContent;
