# Patchlog

## 2026-06-11 — Session 5: UI Polish, Auth & Content Updates

### FocalPoint.tsx
- **Sonar Ping & Visibility**: Redesigned the central interactive dot. Added a pulsing sonar ripple effect (`scale: [1, 3.5]`) and boosted the core dot's visibility with `bg-[#00E5FF]` and a constant neon glow. Added interactive hover states to the outer container ring.
- **Skills Readability**: Enlarged skill tags to `text-xs` (12px), increased padding (`px-4 py-1.5`), boosted text opacity, and added a subtle `bg-[rgba(0,229,255,0.03)]` tint for better contrast.
- **Description Formatting**: Added `whitespace-pre-line` to the narrative/description `<p>` tag to properly render line breaks from the data file.

### cvData.ts
- Updated the description for the "AI Project Management" milestone (Era 03). Replaced the single block with three distinct paragraphs detailing EDA, MLOps, and agentic workflows, formatted with `\n\n`.

### page.tsx
- **Access Control Integration**: Implemented application-level password protection (`isAuthenticated` state, `localStorage` check) to block access to the roadmap and prevent search engine indexing without requiring Vercel Pro.
- **Social Links**: Replaced the text-based LinkedIn link and Lucide icon with a custom solid white LinkedIn SVG. Added a matching solid GitHub SVG linking to `https://github.com/lange-chris`. Cleaned up unused `lucide-react` imports.

### PasswordScreen.tsx (New Component)
- Built a custom, fully animated lock screen matching the app's HUD aesthetic. Features access code validation ("lange26") and visual error handling ("Access Denied").

### Cleanup
- Removed unused Next.js boilerplate assets from `/public` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
## 2026-05-14 — Session 4: Content & Copy Updates

### LandingSlide.tsx
- Removed Era 04 ("Stories that go beyond the ordinary.") from the landing page era list (`.slice(0, 3)`)
- Slogan changed: "EMPOWER TEAMS. BUILD AI" → "Empower Teams | Build Products"
- Subheader: removed "strategy" → "shaping AI-driven products"

### cvData.ts — Era 03: THE AI ERA
- Replaced all 3 milestone titles with new certifications/courses:
  - "Agile Product Owner & Scrum Master Certificate" (06–07/2025)
  - "Product Management for AI & Data Science Course" (11/2025)
  - "AI Project Management (18-Week Fulltime Bootcamp)" (01–06/2026)
- Added descriptions and 5–7 skills to each milestone

### cvData.ts — Era 04: Stories that go beyond the ordinary.
- **Competitive Sport**: "Years of..." → "Decades of..."
- **App Development**: description added (mi'ti AI productivity dashboard)
- **Product at Heart Summit**: description added (volunteering 2026)
- **Around the World**: description added (travel across Europe, Florida, etc.)
- **The Team**: new 5th milestone added (Sportsteam Hamburg & Loveboat org history)

---

## 2026-05-13 — Session 3: Outrigger Image & Content Updates

### FocalPoint.tsx
- Replaced `next/image` with native `<img>` tag for milestone background image (fixes loading issue with non-standard PNG)
- Repositioned milestone image: from full-screen bottom background → embedded directly below the description text in the panel
- Image transform: `rotateY(180deg)` (horizontal mirror)
- Image opacity adjusted to `0.15`

### cvData.ts
- Added description for **App Development** milestone (Era 04 – Stories):
  *"Development of mi'ti, an AI-powered mental health productivity dashboard..."*
- `image` field added to `Milestone` interface (was already in previous session)
- `image: "/outrigger.png"` set on **Competitive Sport** milestone

### public/
- Added `outrigger.png` — silhouette image of outrigger canoe crew, displayed behind Competitive Sport description

---

## 2026-05-11 — Session 2: Midnight Console Dark Mode + Radial Menu

### globals.css
- Full dark mode rewrite: `--background: #101820`, `--foreground: #E0E0E0`, `--accent: #00E5FF`
- Grid lines: `opacity: 0.06`
- `.cta-glow` class with cyan text-shadow

### FocalPoint.tsx (new component)
- Interactive radial constellation menu centered on screen
- SVG lines animate from center circle to nodes (`motion.path` with `pathLength`)
- Nodes: outer ring circle + inner dot, cyan highlight on selection
- Text labels positioned away from center using cosine/sine alignment
- Description panel top-right: shows `era.narrative` when closed, node description when selected
- Skills panel bottom-center: 5–8 skills per milestone, staggered fade-in
- `onOpenChange` callback lifts `menuOpen` state to page.tsx
- State resets on era change via `useEffect([era.id])`

### EraSlide.tsx
- Removed: narrative block, Key Milestones section, location display
- Added: `menuOpen` prop — hides era skills when radial menu is open
- Milestones now typed as `Milestone` objects

### cvData.ts
- Full data rewrite: 4 Eras with milestones, descriptions, skills
  - Era 01: Foundation (4 milestones)
  - Era 02: People & Product (4 milestones)
  - Era 03: The AI Era (3 milestones)
  - Era 04: Stories that go beyond the ordinary. (4 milestones)

### LandingSlide.tsx
- Tagline: "EMPOWER TEAMS. BUILD AI"
- Subtitle updated, era navigation cards restyled (18px titles, 14px years)
- "Browse Chronologically" button: `.cta-glow`, `absolute bottom-16`

### page.tsx
- `menuOpen` state added and passed to FocalPoint + EraSlide
- Navigation dots: `fixed bottom-8`, centered
- LinkedIn link retained top-right; all other persistent UI removed

### GridBackground.tsx
- Decorative line opacity: `opacity-30` → `opacity-[0.06]`

---

## 2026-05-?? — Session 1: Initial Build

- Minimalist portfolio scaffold with Bauhaus aesthetic
- Horizontal slide navigation (wheel + drag)
- Dark background, monospace typography
- Era-based CV structure
