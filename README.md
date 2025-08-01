# WebApp Kiosk - Movie Night Birthday Party Booking System

## Project Overview

This is a React-based web application for booking movie night birthday parties. The application provides a modern, responsive interface for users to browse trending movies, explore service packages, and book personalized movie experiences for birthday celebrations.

## Technology Stack

### Frontend Framework & Build Tools

- **React 19.1.0** - Modern React with latest features and performance improvements
- **TypeScript 5.8.3** - Provides type safety and enhanced developer experience
- **Vite 7.0.4** - Fast build tool and development server with ES modules support
- **@vitejs/plugin-react-swc 3.10.2** - React plugin using SWC for faster compilation

### Styling & UI Framework

- **Tailwind CSS 4.1.11** - Utility-first CSS framework for rapid UI development
- **@tailwindcss/vite 4.1.11** - Vite integration for Tailwind CSS
- **tw-animate-css 1.3.6** - Animation utilities for Tailwind
- **Shadcn/ui Components** - High-quality, accessible UI components built on Radix UI
  - Custom theme with dark/light mode support
  - Components: Button, Card, Dialog, Form, Input, Label, Popover, Calendar, Dropdown Menu

### State Management & Data Fetching

- **@tanstack/react-query 5.83.0** - Powerful data synchronization and server state management
- **React Context API** - For theme management and global state

### Form Handling & Validation

- **React Hook Form 7.61.1** - Performant forms with minimal re-renders
- **@hookform/resolvers 5.2.0** - Validation resolver library integration
- **Zod 4.0.10** - TypeScript-first schema validation library

### UI Component Libraries

- **Radix UI Primitives** - Unstyled, accessible components:
  - `@radix-ui/react-dialog 1.1.14`
  - `@radix-ui/react-dropdown-menu 2.1.15`
  - `@radix-ui/react-label 2.1.7`
  - `@radix-ui/react-popover 1.1.14`
  - `@radix-ui/react-slot 1.2.3`

### Icons & Date Handling

- **Lucide React 0.525.0** - Beautiful, customizable SVG icons
- **Date-fns 4.1.0** - Modern JavaScript date utility library
- **React Day Picker 9.8.1** - Flexible date picker component

### Utility Libraries

- **Class Variance Authority 0.7.1** - Creating type-safe component variants
- **clsx 2.1.1** - Conditional CSS class names utility
- **tailwind-merge 3.3.1** - Merging Tailwind CSS classes without conflicts

### External APIs

- **The Movie Database (TMDB) API** - Fetching trending movies and movie data
  - Environment variable: `VITE_TMDB_API_KEY`

### Development Tools

- **ESLint 9.30.1** - Code linting with React-specific rules
- **TypeScript ESLint 8.35.1** - TypeScript-specific linting rules
- **@types/node 24.1.0** - Node.js type definitions
- **@types/react 19.1.8** - React type definitions
- **@types/react-dom 19.1.6** - React DOM type definitions

## Project Structure

```
src/
├── components/
│   ├── booking.tsx/          # Booking form components
│   │   ├── index.tsx         # Main booking form
│   │   ├── validation.ts     # Zod validation schemas
│   │   ├── input.tsx         # Form input components
│   │   ├── date-time-picker.tsx
│   │   └── dropdown-picker.tsx
│   ├── hero/                 # Landing section components
│   ├── services/             # Service packages display
│   ├── movie/                # Movie browsing components
│   ├── ui/                   # Reusable UI components (Shadcn/ui)
│   ├── header/               # Navigation header
│   ├── container/            # Layout container
│   └── theme-provider.tsx    # Theme management
├── hooks/
│   └── use-fetch-movie.tsx   # Custom hook for TMDB API
├── lib/
│   └── utils.ts              # Utility functions
└── main.tsx                  # Application entry point
```

## Key Features

### Movie Integration

- Fetches trending movies from TMDB API using React Query
- Displays movie cards with posters, titles, and details
- Loading and error states for better user experience

### Booking System

- Comprehensive form validation using Zod schemas
- Booking form built with react-hook-form for robust state management and validation

### Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive grid layouts for different screen sizes
- Modern design with gradients and animations

## Configuration Files

- **vite.config.ts** - Vite configuration with path aliases and Tailwind integration
- **tsconfig.json** - TypeScript configuration with path mapping
- **components.json** - Shadcn/ui component configuration
- **eslint.config.js** - ESLint rules and settings
- **package.json** - Dependencies and build scripts

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

This project demonstrates modern React development practices with TypeScript, component-based architecture, form handling, API integration, and responsive design principles.
