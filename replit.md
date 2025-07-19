# Berkeley Haas-Themed Personal Profile Website

## Overview

This is a Berkeley Haas-themed personal profile website for Arnav Jamwal, a current Berkeley Haas student and entrepreneur. The site features Berkeley Blue and California Gold colors with sections for About Me, Skills & Interests, and Contact information. Built with a modern full-stack architecture featuring React on the frontend, Express.js on the backend, and designed for easy deployment and future enhancements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints (prefixed with `/api`)
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: TSX for hot reloading during development

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas integrated with Drizzle

## Key Components

### Shared Schema (`shared/schema.ts`)
- Centralized database schema definitions
- Type-safe user model with validation
- Shared types between frontend and backend

### Storage Layer (`server/storage.ts`)
- Abstract storage interface for CRUD operations
- In-memory storage implementation for development
- Designed for easy replacement with database-backed storage

### UI Components (`client/src/components/ui/`)
- Complete shadcn/ui component library
- Radix UI primitives with custom styling
- Consistent design system with theme support

### Query Client (`client/src/lib/queryClient.ts`)
- Centralized API request handling
- Error handling and response validation
- Optimistic updates and caching

## Data Flow

1. **Client Requests**: React components use TanStack Query hooks
2. **API Layer**: Requests routed through Express middleware
3. **Storage Interface**: Controllers interact with storage abstraction
4. **Data Persistence**: Storage layer handles CRUD operations
5. **Response Flow**: Type-safe data flows back through the same path

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@radix-ui/***: Accessible UI component primitives

### Development Tools
- **Vite**: Build tool with React plugin
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety across the full stack
- **Drizzle Kit**: Database migrations and schema management

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific tooling

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with HMR
- TSX for backend hot reloading
- Shared TypeScript configuration
- Environment-based configuration

### Production Build
- Vite builds optimized frontend bundle
- ESBuild compiles backend to single file
- Static assets served from Express
- Database migrations via Drizzle Kit

### Environment Configuration
- PostgreSQL connection via `DATABASE_URL`
- Neon serverless database support
- Session storage with PostgreSQL backend
- Development vs production environment detection

The architecture prioritizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between frontend, backend, and data layers.