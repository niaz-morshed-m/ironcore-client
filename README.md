# IronCore Fitness - Next.js Project

A premium gym equipment e-commerce website built with Next.js 15, Tailwind CSS, and ESLint.

## Features

- **Next.js 15** with App Router
- **React 19** with JSX components
- **Tailwind CSS** for styling with custom theme
- **Lucide React** icons for modern iconography
- **ESLint** for code quality
- **Dark/Light mode** toggle
- **Responsive design** for all devices
- **Component-based architecture**
- **Dynamic product pages** with [id] routing
- **Complete e-commerce structure**:
  - Products listing page (`/products`)
  - Individual product pages (`/products/[id]`)
  - Product details with quantity selector
  - Tabbed content (Description/Reviews)
- **Complete landing page** with multiple sections:
  - Hero section with call-to-action
  - Featured products showcase (linked to product pages)
  - Category selection
  - New arrivals with ratings
  - Home gym builder with packages
  - Success stories and testimonials
  - Training lab with workout programs
  - Ready to level up CTA section
  - Newsletter signup
  - Comprehensive footer

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── components/          # React JSX components
│   │   ├── Header.jsx       # Navigation and search
│   │   ├── Hero.jsx         # Main hero section
│   │   ├── FeaturedProducts.jsx  # Product showcase
│   │   ├── CategorySection.jsx   # Category selection
│   │   ├── NewArrivals.jsx       # Latest products
│   │   ├── BuildHomeGym.jsx      # Gym packages
│   │   ├── SuccessStories.jsx    # Testimonials
│   │   ├── TrainingLab.jsx       # Workout programs
│   │   ├── ReadyToLevelUp.jsx    # CTA section
│   │   ├── Newsletter.jsx        # Email signup
│   │   ├── Footer.jsx            # Site footer
│   │   └── DarkModeToggle.jsx    # Theme switcher
│   ├── products/            # Product pages
│   │   ├── page.jsx         # Products listing
│   │   └── [id]/            # Dynamic product routes
│   │       └── page.jsx     # Individual product page
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## Customization

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Fonts**: Google Fonts (Syncopate & Inter) are loaded in `globals.css`
- **Components**: All components are in `app/components/`