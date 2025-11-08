# Agent Guide for Three.js Level Generator

This document provides essential information for AI agents working on this repository.

## Project Overview

This is a TypeScript-based three.js level generation system that integrates with an MCP asset generation server to create dynamic 3D scenes with procedurally generated assets.

## Architecture

### Backend (Express + Prisma + SQLite)
- **Express API**: RESTful endpoints for scene management and asset metadata
- **Prisma ORM**: Database operations with SQLite (`prisma/dev.db`)
- **Asset Metadata Storage**: JSON schemas describing scenes without storing binary assets
- **MCP Integration**: API endpoints to communicate with mcp-asset-gen server at `~/Projects/mcp-asset-gen`

### Frontend (React + Three.js + React Three Fiber)
- **React Three Fiber**: React renderer for Three.js
- **3D Scene Rendering**: Display generated levels and assets
- **Asset Loading**: Dynamic loading of 3D models, textures, and materials
- **Scene Controls**: User interface for scene manipulation and generation

## Development Commands

```bash
# Development server
npm run dev

# Testing (IMPORTANT: use "vitest run", not "vitest")
npm run test

# Linting
npm run lint        # Check for linting issues
npm run lint:fix    # Auto-fix linting issues

# Database operations
npm run prisma:generate
npm run prisma:push

# Build
npm run build
```

## Key Constraints & Requirements

### Testing Requirements
- **CRITICAL**: Always use `npm run test` (which runs `vitest run`) - never use `vitest` directly
- **DO NOT** add `tsx` as a dev dependency - we use it for running TypeScript files but not for testing
- Tests should mock Three.js components to avoid browser-specific APIs

### Database
- Uses SQLite with Prisma ORM
- Database file: `prisma/dev.db`
- Schema location: `prisma/schema.prisma`
- Current models: `Scene`, `Asset` with metadata storage

### Project Structure
```
server/src/     # Express backend code
client/src/     # React frontend code
shared/         # Shared types and utilities
tests/          # Test files
tasks/          # Project planning documentation
```

## Current Implementation Status

### ✅ Completed (Phase 1)
- TypeScript Vite + Express setup with middleware mode
- Prisma + SQLite configuration
- Three.js + React Three Fiber spinning cube demo
- Vitest testing infrastructure
- Basic project structure

### 🚧 Next Phase Goals
1. **Backend API Development**
   - Express API endpoints for scenes and assets
   - MCP asset-gen server integration
   - File upload/management system

2. **Frontend 3D Implementation**
   - Scene reconstruction from metadata
   - Asset loading system
   - User interface for scene controls

## MCP Integration

The app is designed to integrate with the MCP asset generation server located at `~/Projects/mcp-asset-gen`. This integration will:

1. Allow the backend to request asset generation via MCP server
2. Store generated assets (models, textures) in the `uploads/` directory
3. Save scene/asset metadata to SQLite database
4. Enable frontend to reconstruct scenes from metadata

## Important Notes for Agents

### When Working on Backend
- Use Express with TypeScript
- Follow existing patterns in `server/src/server.ts`
- Database operations must use Prisma client
- API endpoints should follow RESTful conventions

### When Working on Frontend
- Use React Three Fiber for Three.js integration
- Components should be in `client/src/components/`
- Follow existing patterns in `client/src/App.tsx`
- Three.js objects should use proper TypeScript types

### When Adding Tests
- Place test files in `tests/` directory
- Mock Three.js components to avoid browser dependencies
- Use `@testing-library/react` for component testing
- Always run `npm run test` to verify tests pass

### When Modifying Database
- Update `prisma/schema.prisma`
- Run `npm run prisma:push` to apply changes
- Run `npm run prisma:generate` to update client
- Test database operations work correctly

## File Naming Conventions

- React components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Test files: `*.test.ts` or `*.test.tsx`
- Database models: Defined in Prisma schema

## Environment Setup

- Node.js with TypeScript support
- SQLite database (auto-created)
- MCP asset-gen server should be available at `~/Projects/mcp-asset-gen`

## Future Development Path

See `tasks/plan.md` for the complete implementation roadmap. The project follows a phased approach:

1. **Phase 1**: Foundation (✅ Complete)
2. **Phase 2**: Backend API & MCP Integration
3. **Phase 3**: Frontend 3D Implementation
4. **Phase 4**: Advanced Features

When contributing, identify which phase your work belongs to and follow the established patterns for that phase.

## Git Workflow

### Commit & Push Instructions
**IMPORTANT**: Always run tests and linting before committing and pushing to GitHub:

```bash
# 1. Run tests to ensure everything works
npm run test

# 2. Run linting to ensure code quality
npm run lint

# 3. If tests and linting pass, add your changes
git add .

# 4. Commit with descriptive message
git commit -m "Your descriptive commit message"

# 5. Push to GitHub
git push
```

### Commit Message Guidelines
- Use clear, descriptive commit messages
- Reference the phase you're working on when applicable
- Include what was changed and why
- Examples:
  - "Phase 2: Add scene API endpoints with Prisma integration"
  - "Fix: Resolve Three.js rendering issue in SpinningCube component"
  - "Add: Asset upload middleware for MCP integration"