# Three.js Level Generation Project Plan

## Project Overview
This project will create a three.js level generation system that integrates with an MCP asset generation server to create dynamic 3D scenes with procedurally generated assets.

## Architecture

### Backend (Express + Prisma + SQLite)
- **Express API**: RESTful endpoints for scene management and asset metadata
- **Prisma ORM**: Database operations with SQLite for development
- **Asset Metadata Storage**: JSON schemas describing scenes without storing binary assets
- **MCP Integration**: API endpoints to communicate with mcp-asset-gen server

### Frontend (React + Three.js + React Three Fiber)
- **React Three Fiber**: React renderer for Three.js
- **3D Scene Rendering**: Display generated levels and assets
- **Asset Loading**: Dynamic loading of 3D models, textures, and materials
- **Scene Controls**: User interface for scene manipulation and generation

### Asset Generation Pipeline
1. **Request Generation**: Frontend requests asset/level generation via backend API
2. **MCP Communication**: Backend calls mcp-asset-gen server (~/Projects/mcp-asset-gen)
3. **Asset Creation**: Coding agent generates 3D models, textures, images
4. **Metadata Storage**: Backend saves scene/asset metadata to SQLite
5. **Scene Reconstruction**: Frontend loads metadata and reconstructs 3D scene

## Implementation Phases

### Phase 1: Foundation Setup ✅
- [x] Project planning and architecture design
- [ ] TypeScript Vite + Express setup
- [ ] Prisma + SQLite configuration
- [ ] Basic Three.js spinning cube demo
- [ ] Testing infrastructure (Vitest)

### Phase 2: Backend API Development
- [ ] Database schema design (scenes, assets, metadata)
- [ ] Express API endpoints
- [ ] MCP asset-gen server integration
- [ ] File upload/management system
- [ ] Scene serialization/deserialization

### Phase 3: Frontend 3D Implementation
- [ ] React Three Fiber scene setup
- [ ] Asset loading system (models, textures)
- [ ] Scene reconstruction from metadata
- [ ] User interface for scene controls
- [ ] Asset generation triggers

### Phase 4: Advanced Features
- [ ] Real-time asset generation
- [ ] Scene editing capabilities
- [ ] Asset library management
- [ ] Export/import functionality
- [ ] Performance optimization

## Technical Stack

### Dependencies
- **Backend**: Express, Prisma, SQLite, TypeScript
- **Frontend**: React, Three.js, React Three Fiber, Vite
- **Testing**: Vitest (without tsx dev dependency)
- **Build**: Vite in middleware mode with Express

### Project Structure
```
three-generator/
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── models/        # Database models
│   │   └── middleware/    # Express middleware
│   ├── prisma/           # Database schema
│   └── uploads/          # Generated assets storage
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── scenes/       # Three.js scenes
│   │   ├── hooks/        # Custom hooks
│   │   └── utils/        # Utilities
├── shared/               # Shared types and utilities
└── tests/               # Test files
```

## Key Considerations

### Performance
- Lazy loading of 3D assets
- Scene optimization for complex levels
- Efficient memory management for large models

### Security
- File upload validation
- API rate limiting for asset generation
- Secure MCP server communication

### Scalability
- Modular architecture for easy extension
- Plugin system for custom asset generators
- Configurable generation parameters

## Next Steps
1. Complete Phase 1 foundation setup
2. Design database schema for scenes and assets
3. Implement basic MCP integration
4. Create first working asset generation pipeline
5. Build user interface for scene management