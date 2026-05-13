# Patchlog

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
