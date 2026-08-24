# MaamulPro Landing Page

A modern, responsive landing page for **MaamulPro** — an all-in-one construction and real estate management system built with cutting-edge web technologies.

**Live**: [maamulpro-landing.vercel.app](https://maamulpro-landing.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

MaamulPro is a comprehensive management system designed for:
- Construction companies
- Real estate businesses
- Hybrid organizations

**Key Features:**
- Centralized project management
- Property & portfolio tracking
- Staff management
- Payment & billing automation
- Comprehensive reporting
- Secure, isolated databases per company
- Modular architecture (turn modules on/off)
- Multi-language support (English, Somali)

---

## Tech Stack

### Frontend
- **React 19.2** - UI library
- **TypeScript** - Type-safe development
- **TanStack Router 1.169** - File-based routing
- **TanStack React Query 5.83** - Data fetching & caching
- **Tailwind CSS 4.2** - Utility-first styling

### UI Components
- **Radix UI** - Headless, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Popover, Select, Tabs, Tooltip, etc.
- **Lucide React** - Icon library
- **Framer Motion** - Animation & transitions
- **Embla Carousel** - Carousel functionality
- **Recharts** - Data visualization

### Forms & Validation
- **React Hook Form 7.71** - Performant form handling
- **Zod 3.24** - TypeScript-first schema validation
- **Input OTP** - OTP input component

### Build & Deployment
- **Vite 7.3** - Fast build tool
- **Nitro 3.0** - Full-stack framework
- **Cloudflare Vite Plugin** - Cloudflare Workers integration
- **Vercel** - Hosting platform

### Development Tools
- **ESLint 9.32** - Code linting
- **Prettier 3.7** - Code formatting
- **Vitest** - Unit testing

---

## Project Structure

```
maamulpro-landing/
├── src/
│   ├── routes/                    # TanStack Router file-based routes
│   │   ├── __root.tsx            # Root layout & error handling
│   │   └── index.tsx             # Home page
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx            # Navigation bar (responsive)
│   │   ├── Hero.tsx              # Hero section with parallax
│   │   ├── Modes.tsx             # Different operation modes
│   │   ├── BentoFeatures.tsx      # Feature grid layout
│   │   ├── Benefits.tsx          # Key benefits section
│   │   ├── QuickAccess.tsx       # Quick access module
│   │   ├── Pricing.tsx           # Pricing table
│   │   ├── FinalCTA.tsx          # Call-to-action section
│   │   ├── Footer.tsx            # Footer
│   │   ├── CustomCursor.tsx      # Custom cursor animation
│   │   ├── BackToTop.tsx         # Scroll to top button
│   │   ├── ThemeProvider.tsx     # Dark/Light theme context
│   │   ├── ThemeToggle.tsx       # Theme switcher component
│   │   └── ui/                   # Radix UI based components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── [other UI components]
│   ├── images/                   # Image assets
│   │   ├── MaamulPro.png
│   │   └── maamulpro-dashboard.png
│   ├── styles.css               # Global styles
│   └── lib/                      # Utility functions
│       ├── cn.ts               # CSS class merging utility
│       └── utils.ts            # Helper functions
├── public/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   └── [other static assets]
├── vite.config.ts               # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siivgroup/maamulpro-landing.git
   cd maamulpro-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file (if needed for future features):
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:3000` in your browser.

---

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with Vite (port 3000)

# Production Build
npm run build            # Build for production
npm run build:dev        # Build in development mode

# Preview
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

---

## Components

### Page Layout

#### **Navbar** (`src/components/Navbar.tsx`)
- Fixed navigation bar with scroll detection
- Responsive design (hamburger menu on mobile)
- Links: Home, Features, Modules, Pricing, About, Contact
- Theme toggle button
- Login & Demo Request CTA buttons
- Scroll progress bar (gradient blue-to-gold)

#### **Hero** (`src/components/Hero.tsx`)
- Full-height hero section with parallax scrolling
- Multilingual headline (English & Somali)
- Feature highlights with checkmarks
- Dashboard image preview (right side, desktop only)
- Primary & secondary CTA buttons
- Grid background pattern

#### **Modes** (`src/components/Modes.tsx`)
- Different operational modes for companies
- Construction mode
- Real Estate mode
- Hybrid mode

#### **BentoFeatures** (`src/components/BentoFeatures.tsx`)
- Grid-based feature showcase
- Responsive bento layout
- Feature cards with icons

#### **Benefits** (`src/components/Benefits.tsx`)
- Key value propositions
- Database isolation per company
- Secure & reliable infrastructure
- Data protection features

#### **QuickAccess** (`src/components/QuickAccess.tsx`)
- Quick module access section
- Module toggles/switches

#### **Pricing** (`src/components/Pricing.tsx`)
- Pricing tiers
- Feature comparison
- CTA for each plan

#### **FinalCTA** (`src/components/FinalCTA.tsx`)
- Final call-to-action section
- Persuasive messaging
- Contact/demo request

#### **Footer** (`src/components/Footer.tsx`)
- Company information
- Navigation links
- Social media links
- Copyright info

#### **CustomCursor** (`src/components/CustomCursor.tsx`)
- Custom animated cursor
- Follows mouse movement

#### **BackToTop** (`src/components/BackToTop.tsx`)
- Floating "Back to Top" button
- Visible after scrolling

#### **ThemeProvider** (`src/components/ThemeProvider.tsx`)
- Dark/Light theme context provider
- Persistent theme preference

#### **UI Components** (`src/components/ui/`)
- Pre-built Radix UI components
- Styled with Tailwind CSS
- Includes: Accordion, Alert Dialog, Button, Dialog, Popover, Select, Tabs, Tooltip, etc.

---

## Styling

### Tailwind CSS
- **Version**: 4.2.1
- **Config**: `tailwind.config.js`
- **Theme Colors**:
  - Primary: Blue
  - Secondary: Gold
  - Background: Dark mode by default
  - Foreground: Light text

### Custom Styles
- **Global**: `src/styles.css`
- **Grid Background**: CSS grid pattern overlay
- **Animations**: Framer Motion for smooth transitions

### Dark/Light Mode
- Toggle via `ThemeToggle` component
- Persisted in localStorage
- CSS class-based switching (`.dark` on html element)

---

## Deployment

### Vercel (Current)
The project is deployed on **Vercel** and configured for automatic deployments.

**Homepage**: https://maamulpro-landing.vercel.app

**Deploy Configuration:**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

### Cloudflare Workers
The project supports Cloudflare Workers via Nitro integration.

**Deploy to Cloudflare:**
```bash
npm run build
wrangler deploy
```

### Local Production Preview
```bash
npm run build
npm run preview
```

---

## Development Workflow

### Code Style
- **Formatting**: Run `npm run format` before committing
- **Linting**: Run `npm run lint` to check code quality
- **TypeScript**: Strict mode enabled

### Component Development
1. Create component in `src/components/`
2. Use TypeScript for type safety
3. Leverage Radix UI primitives for accessibility
4. Style with Tailwind CSS classes
5. Add animations with Framer Motion if needed

### Adding New Pages
1. Create new file in `src/routes/` (e.g., `src/routes/about.tsx`)
2. Use TanStack Router's `createFileRoute()`
3. Import and compose components
4. Route automatically added based on filename

---

## Key Features & Technologies

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Hamburger menu on mobile devices
- Image optimization

### Performance
- Code splitting via Vite
- Lazy loading with React.lazy
- React Query for efficient data fetching
- Image optimization

### Accessibility
- Radix UI for semantic, accessible components
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly

### SEO
- Meta tags in head (Open Graph, Twitter)
- Semantic HTML structure
- Dynamic meta per route
- Favicon & manifest configuration

### Animations
- Smooth transitions with Framer Motion
- Parallax scrolling effects
- Scroll-triggered animations
- Custom cursor animation

---

## Environment Variables

Currently, the project doesn't require environment variables, but here are common ones for future use:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your_api_key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=false
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build -- --force
```

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

### Code Standards
- Follow ESLint rules
- Format with Prettier
- Write TypeScript with strict mode
- Add meaningful commit messages

---

## License

Private repository © 2026 SIIV Group. All rights reserved.

---

## Support & Contact

- **Website**: [maamulpro-landing.vercel.app](https://maamulpro-landing.vercel.app)
- **App**: [app.maamulpro.site](https://app.maamulpro.site)
- **WhatsApp**: [Request Demo](https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro.)
- **Organization**: [SIIV Group](https://github.com/siivgroup)

---

**Last Updated**: August 2026
**Repository**: [siivgroup/maamulpro-landing](https://github.com/siivgroup/maamulpro-landing)
