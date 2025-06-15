
# Food Waste Initiative - Next.js Application

A modern Next.js web application built to support food waste reduction initiatives through journaling, blogging, and community engagement. This platform allows users to track their food waste reduction journey and share insights through blog posts.

## 🌱 Project Overview

This application serves as a comprehensive platform for:
- **Personal Journaling**: Track your food waste reduction efforts through JournalCamp
- **Community Blogging**: Share insights and stories about food waste reduction
- **Visual Gallery**: Explore and share images related to food waste initiatives
- **Impact Tracking**: Monitor your environmental impact with stats and metrics

## 🚀 Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom green theme
- **UI Components**: shadcn/ui component library (comprehensive set)
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Notifications**: Custom toast system + Sonner
- **State Management**: React hooks + TanStack Query
- **Routing**: Next.js App Router

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## 🏗️ Project Structure

```
app/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── spinners/              # 5 different loading spinners
│   ├── BlogPage/              # Blog-related components
│   ├── global/                # Header, Footer components
│   ├── journal-dashboard.tsx  # Journal overview
│   ├── journal-entry.tsx      # Journal entry form
│   ├── impact.tsx             # Impact tracking
│   ├── sponsors.tsx           # Sponsor section
│   └── stats.tsx              # Statistics display
├── hooks/                     # Custom React hooks
├── journalCamp/               # Journal pages
│   ├── page.tsx              # Main journal page
│   ├── [id]/page.tsx         # Individual journal entry
│   └── journalEntry/page.tsx # Create new entry
├── blog/page.tsx             # Blog listing
├── gallery/page.tsx          # Image gallery
└── page.tsx                  # Homepage
```

## 🎨 Design System

**Color Palette:**
- Primary Green: `#179C3A` (HSL: 142 76% 36%)
- Light Green backgrounds for sustainability theme
- Consistent spacing using Tailwind's scale

**Components Available:**
- **5 Spinner Variants**: ClassicRing, Dots, Pulse, Pinwheel, Bars
- **Complete shadcn/ui Set**: Button, Card, Input, Toast, Dialog, etc.
- **Custom Components**: JournalDashboard, BlogCard, Impact tracker

## 🧩 Key Features

### 📝 Journal System (JournalCamp)
- Create and manage food waste reduction entries
- Individual entry pages with detailed tracking
- Dashboard overview of all entries

### 📰 Blog Platform
- Community-driven blog posts
- BlogCard components for preview
- Responsive gallery layout

### 📊 Impact Tracking
- Statistics and metrics display
- Visual charts with Recharts
- Progress monitoring

### 🔄 Loading States
- 5 different spinner animations
- Consistent loading indicators
- Customizable size and color props

## 📱 Responsive Design

Fully responsive design optimized for:
- Desktop: Full-featured layout
- Tablet: Adapted layouts
- Mobile: Touch-optimized interface

## 🛠️ Development Guidelines

**Component Patterns:**
- Use shadcn/ui components as base
- Custom components in focused files
- TypeScript for type safety
- Tailwind for styling

**Available Hooks:**
- `useToast` for notifications
- `useMobile` for responsive behavior
- Custom hooks in `/hooks` directory

## 🚀 Deployment

Built on Next.js 15, ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📚 Documentation

- **Spinners**: `docs/SPINNERS.md` - All 5 spinner variants
- **Toast System**: `docs/TOAST.md` - Notification system
- **UI Components**: `docs/UI-COMPONENTS.md` - shadcn/ui guide
- **Architecture**: `docs/ARCHITECTURE.md` - Technical details

## 🔧 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint checking
```

This is a comprehensive platform for food waste reduction with modern React patterns, excellent developer experience, and a focus on sustainability themes.
