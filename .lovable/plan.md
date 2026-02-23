

# ERA Academy Website — Full Redesign Plan

A complete redesign of the ERA Academy website (era.com.ng) adapted to the current Vite + React + Tailwind stack. All data will be served from local JSON files. Backend features (email, payments, file uploads) will use placeholder/mailto fallbacks, ready for future integration.

---

## Phase 1: Design Foundation

### 1. Design Tokens & Typography
- Add **Instrument Serif** (Google Fonts) for display/headings and **DM Sans** for body text
- Set up the full colour palette: white canvas, grey scale (50–900), green accent (#22c55e), green-light (#dcfce7), green-dark (#15803d)
- Configure Tailwind with all custom tokens, spacing (48–64px section padding), and border-radius values
- Add `scroll-behavior: smooth` globally

### 2. Reusable Section Heading Component
- Green uppercase pill tag → Instrument Serif heading → grey DM Sans subtitle
- Used consistently across every section of the site

---

## Phase 2: Navigation & Layout

### 3. Floating Pill Navbar
- Fixed, horizontally centered, pill-shaped navigation bar
- **Default state**: 80% width, solid white background, top padding
- **Scrolled state** (after 50px): shrinks to 65%, glass-morphism blur effect with translucent background
- Smooth animated transition between states
- Links: Home, About, Blog, Contact + green "Join Program" CTA button
- **Mobile**: hamburger icon that opens a slide-in drawer menu
- ERA logo on the left

### 4. Footer
- Company info, quick links, contact details (mailto:info@era.com.ng), social links
- Consistent with the clean white/grey/green design language

---

## Phase 3: Homepage Sections

### 5. Hero Section — Left/Right Split
- **Left column (55%)**: "Engineering Resources Academy" pill tag, large Instrument Serif headline ("Great futures are built with proper guidance"), body text, two CTA buttons ("Join Us" → mailto, "Become a Partner" → mailto), stat pills row (95% employment, 500+ engineers, 20+ partners)
- **Right column (45%)**: Hero image placeholder with two floating glassmorphism stat cards that gently bob up and down
- Entrance animations: left slides in from left, right fades and scales in
- Pure white background — no background images

### 6. Partners Marquee Strip
- Infinite horizontal scrolling logo strip
- **Two-layer colour/greyscale split effect**: logos appear greyscale on the right half, transition to full colour as they cross the midpoint
- Soft gradient warp at the boundary, fade edges on both sides
- Pause on hover
- Partner names from a JSON data array (placeholder logos initially)

### 7. Bento Stats Grid
- Replace plain counters with a bento-style grid layout
- Cards: "500+ Engineers Trained", "95% Employment Rate", "20+ Partner Companies", "6 Month Intensive Program"
- Instrument Serif for numbers, DM Sans for descriptions
- Staggered entrance animations
- "Join Today" and "Partner With Us" CTA buttons

### 8. Programs Bento Grid
- Three program cards in asymmetric bento layout (one large, two stacked)
- Programs: Technical Training, Soft Skills Development, Internship Placement
- Image backgrounds with gradient overlays, hover lift effect
- Section heading with green pill tag

### 9. Training Programs Strip (Homepage)
- Horizontal scroll row showing upcoming training cards
- Each card: flyer image placeholder, colour-coded mode badge (hybrid=purple, online=green, physical=orange), title, duration, seats, price, "View Details →" link
- Data loaded from `trainings.json`
- "View All Trainings →" link at end

### 10. Testimonials Section
- Clean card-based testimonials from past participants
- Data from a `testimonials.json` file

---

## Phase 4: Content Pages

### 11. About Page (`/about`)
- Company mission, vision, team overview
- Consistent design language with section headings and bento-style layouts

### 12. All Trainings Page (`/trainings`)
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Filter bar: All | Online | Physical | Hybrid
- Cards identical to homepage training strip cards
- Staggered entrance animations
- Data from `trainings.json`

### 13. Individual Training Page (`/trainings/:id`)
- **Left column**: Flyer image, mode badge, instructor, start date, seats available
- **Right column**: WhatsForm-style enrollment card with green "Most Popular" badge, feature checklist with green checkmarks, price display, "Enroll Now" button
- Enroll flow: modal collects Name, Email, Phone → currently opens `mailto:info@era.com.ng` with pre-filled details (Paystack scaffold ready for later)
- Syllabus list, full description

### 14. Blog Page (`/blog`)
- Bento-style grid: one featured large post + smaller cards
- Each card: cover image placeholder, category pill, title, excerpt, date, author, "Read →"
- Data from `blogs.json`

### 15. Individual Blog Post (`/blog/:slug`)
- Full-width cover image header
- Article content rendered with markdown support
- Author info card
- Related posts section (same category)

### 16. Contact Page (`/contact`)
- Contact form (Name, Email, Phone, Message)
- Submit button currently opens `mailto:info@era.com.ng` with form data
- Company address, phone, email, map placeholder
- Ready for future API integration

### 17. Gallery Page (`/gallery`)
- Masonry grid of images
- Lightbox modal on click
- Initially populated with placeholder images
- Data from `gallery.json`

---

## Phase 5: Dashboard (PIN-Protected CMS)

### 18. Dashboard PIN Gate (`/dashboard`)
- Full-screen branded PIN entry with 6 individual digit input boxes
- PIN validated client-side against a hardcoded check for now (backend API later)
- On success: store auth in sessionStorage, show dashboard
- On wrong PIN: shake animation on inputs, red border flash, error message

### 19. Dashboard Layout & Tabs
- Sidebar navigation with icons: Gallery, Blog Posts, Trainings
- Clean admin interface consistent with ERA branding

### 20. Gallery Manager Tab
- Drag-and-drop upload zone (UI only — actual upload logic deferred to backend)
- Grid of uploaded images with delete buttons
- Currently displays images from `gallery.json`

### 21. Blog Manager Tab
- Form: Title, auto-generated slug, category select, author, excerpt, cover image upload, content (markdown textarea), tags
- "Publish Post" button (saves to local state for now — API later)
- List of existing blog posts with edit/delete

### 22. Training Manager Tab
- Form: Title, slug, description, full details, price, duration, mode select, start date, seats, instructor, flyer upload, dynamic syllabus rows, published toggle
- "Save Training" button (local state for now)
- List of existing trainings with edit/delete

---

## Phase 6: Polish & Animation

### 23. Global Animation System
- Consistent entrance animations on every section (fade up with stagger)
- Hero-specific animations (slide left/right, floating stat cards)
- Navbar glass transition animation
- Card hover lift effects throughout
- PIN shake animation on error

### 24. Responsive & Accessibility Pass
- Full mobile responsiveness on every page and section
- Focus rings, alt text, aria labels
- Consistent 48–64px vertical section padding
- Smooth scroll behaviour

---

## Data Files (JSON)
- `src/data/trainings.json` — 3 sample trainings with full details
- `src/data/blogs.json` — 3 sample blog posts with markdown content
- `src/data/partners.json` — 5+ partner company names/logos
- `src/data/testimonials.json` — 3-4 testimonials
- `src/data/gallery.json` — sample gallery image paths

## Routes
| Route | Page |
|-------|------|
| `/` | Homepage (all sections) |
| `/about` | About ERA |
| `/trainings` | All trainings grid |
| `/trainings/:id` | Individual training + enrollment |
| `/blog` | Blog bento grid |
| `/blog/:slug` | Individual blog post |
| `/contact` | Contact form |
| `/gallery` | Public gallery |
| `/dashboard` | PIN-protected CMS |

