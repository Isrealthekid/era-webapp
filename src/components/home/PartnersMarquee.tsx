import partners from "@/data/partners.json";

const PartnersMarquee = () => {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Trusted by leading companies
        </p>
      </div>
      <div
        className="relative group"
        onMouseEnter={(e) => {
          const inner = e.currentTarget.querySelector('.marquee-inner') as HTMLElement;
          if (inner) inner.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          const inner = e.currentTarget.querySelector('.marquee-inner') as HTMLElement;
          if (inner) inner.style.animationPlayState = 'running';
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Greyscale layer (bottom) */}
        <div className="overflow-hidden">
          <div className="marquee-inner flex gap-16 items-center animate-marquee w-max">
            {doubled.map((partner, i) => (
              <div key={`gs-${i}`} className="flex items-center gap-3 shrink-0 grayscale opacity-40">
                <img src={partner.logo} alt={partner.name} className="h-8 w-8" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colour layer (top, clipped to left half) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <div className="marquee-inner flex gap-16 items-center animate-marquee w-max">
            {doubled.map((partner, i) => (
              <div key={`cl-${i}`} className="flex items-center gap-3 shrink-0">
                <img src={partner.logo} alt={partner.name} className="h-8 w-8" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
