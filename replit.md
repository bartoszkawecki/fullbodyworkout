# Full Body Beginner Workout Tracker

## Overview

A mobile-first web application designed to help users follow and track a 10-week full-body beginner workout program. The app provides a simple, fast interface for viewing exercises, tracking sets and reps, and marking workouts as completed. Built with React, TypeScript, and Tailwind CSS, the application prioritizes clarity and speed during active exercise sessions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (instead of React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component variants managed via class-variance-authority (CVA)
- Mobile-first responsive design approach targeting smartphone users primarily

**State Management Strategy**
- LocalStorage for workout completion tracking (client-side persistence)
- No backend database dependency for MVP - all workout data is statically imported
- Component-level state using React hooks (useState, useEffect)
- Polling mechanism for cross-component state synchronization (WeekCard refresh interval)

**Design System**
- Custom color tokens defined in CSS variables supporting light/dark modes
- Elevation system using hover-elevate and active-elevate-2 utility classes
- Typography scale using Inter font family from Google Fonts CDN
- Spacing primitives based on Tailwind's 3, 4, 6, and 8 unit system

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Middleware for JSON body parsing with raw body capture capability
- Custom logging middleware for API request/response tracking
- Vite integration in development mode for HMR support

**API Design**
- RESTful API structure with `/api` prefix for all routes
- Current implementation is minimal as MVP uses static workout data
- Storage interface pattern defined but implemented as in-memory only (MemStorage)
- Ready for future database integration via IStorage interface abstraction

**Build & Deployment**
- Development: `tsx` for TypeScript execution with hot reload
- Production: Vite builds client assets, esbuild bundles server code
- Separate build outputs: client to `dist/public`, server to `dist`
- Environment-specific behavior via NODE_ENV checks

### Data Storage Solutions

**Current Implementation**
- Browser LocalStorage for completion status (CompletionStatus interface)
- Static JSON import for workout program data (workoutData.ts)
- No database required for MVP functionality

**Database Preparation**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definitions in TypeScript using Zod for validation
- Migration system configured (drizzle-kit) but not actively used
- Interface-based storage pattern allows easy swap to database later

**Data Models**
- Set: reps (string), rir (string), rest (string)
- Exercise: name (string), sets (Set[])
- Workout: week (number), day (number), exercises (Exercise[])
- CompletionStatus: nested object tracking week/day completion booleans

### External Dependencies

**UI Component Libraries**
- @radix-ui/* packages for accessible, unstyled component primitives (dialogs, dropdowns, tooltips, etc.)
- lucide-react for consistent iconography
- embla-carousel-react for potential carousel functionality
- cmdk for command palette functionality (not currently used)

**Styling & Design**
- Tailwind CSS v3+ with PostCSS for processing
- autoprefixer for cross-browser CSS compatibility
- class-variance-authority for component variant management
- clsx and tailwind-merge (via cn utility) for conditional class composition

**Development Tools**
- @replit/vite-plugin-* packages for Replit-specific development enhancements
- TypeScript with strict mode enabled
- Path aliases configured (@/, @shared/, @assets/) for clean imports

**Potential Third-Party Services**
- Google Images search integration (via window.open) for exercise visualization
- No authentication, analytics, or backend services in current MVP

**Workout Data Source**
- Static JSON files containing 10-week program structure
- Blocks divided into phases (Block 1.1, 1.2, 2.1, 2.2, 3.1, 3.2)
- Each week contains multiple days with exercise prescriptions
- Exercise data includes sets, reps, RIR (Reps in Reserve), and rest periods