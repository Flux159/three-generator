# Three.js Level Generator

A TypeScript-based web application for generating 3D levels using Three.js, React Three Fiber, and Express with Prisma for backend data management.

## Features

- **Frontend**: React + Three.js + React Three Fiber
- **Backend**: Express API with Vite in middleware mode
- **Database**: Prisma ORM with SQLite
- **Testing**: Vitest with React Testing Library
- **Asset Generation**: Ready for integration with MCP asset-gen server

## Getting Started

### Installation

```bash
npm install
```

### Database Setup

```bash
npm run prisma:push
npm run prisma:generate
```

### Development

```bash
npm run dev
```

The server will start at http://localhost:3000

### Testing

```bash
npm run test
```

### Build

```bash
npm run build
```

## Project Structure

```
three-generator/
├── server/                 # Express backend
│   └── src/
│       └── server.ts      # Main server file
├── client/                 # React frontend
│   └── src/
│       ├── components/    # React components
│       │   └── SpinningCube.tsx
│       ├── App.tsx        # Main app component
│       ├── main.tsx       # Entry point
│       └── index.css      # Styles
├── tests/                  # Test files
├── prisma/                 # Database schema
├── tasks/                  # Project planning
└── shared/                 # Shared utilities
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests (non-watching)
- `npm run test:ui` - Run tests with UI
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema to database

## Next Steps

See `tasks/plan.md` for the complete project roadmap and implementation phases.