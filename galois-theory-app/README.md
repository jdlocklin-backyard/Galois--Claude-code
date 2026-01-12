# Galois Theory Explorer

An interactive web application that teaches Galois Theory through progressive learning modules, interactive visualizations, and adaptive content for different learning levels.

## Features

- **Three Learning Tracks:**
  - **Explorer** (Ages 8+): Story-based explanations with visual analogies
  - **Learner** (Curious Adults): Conceptual understanding with real-world connections
  - **Advanced** (AP/University Students): Rigorous mathematical treatment with formal definitions

- **Six Progressive Modules:**
  1. The World of Polynomials
  2. Fields and Extensions
  3. Symmetry and Groups
  4. Galois Groups
  5. The Insolvability of the Quintic
  6. The Story of Galois

- **Interactive Visualizations:**
  - Polynomial roots on the complex plane
  - Field extension tower diagram
  - Symmetry group animations
  - Galois correspondence lattice
  - Solvability timeline

- **Knowledge Checks:**
  - Quizzes after each module
  - Immediate feedback with explanations
  - Progress tracking

## Design System

- Deep indigo/navy base (intellectual depth)
- Gold/amber accents (discovery moments)
- Subtle geometric animations
- Clean, readable math typography (KaTeX)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and run production container
docker-compose up -d galois-theory-app

# Access at http://localhost:3000
```

### Development with Docker

```bash
# Run development server with hot reload
docker-compose --profile dev up galois-dev

# Access at http://localhost:5173
```

### Manual Docker Build

```bash
# Build the image
docker build -t galois-theory-app .

# Run the container
docker run -p 3000:80 galois-theory-app
```

## Project Structure

```
galois-theory-app/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Lesson.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── Quiz.tsx
│   │   └── About.tsx
│   ├── context/          # React context for state
│   │   └── TrackContext.tsx
│   ├── data/             # Module content and track info
│   │   └── modules.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── visualizations/   # Interactive SVG visualizations
│   │   ├── PolynomialRoots.tsx
│   │   ├── FieldExtension.tsx
│   │   ├── SymmetryGroup.tsx
│   │   ├── GaloisCorrespondence.tsx
│   │   └── Solvability.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
│   └── favicon.svg
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## Technologies

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Framer Motion** for animations
- **KaTeX** for mathematical typesetting
- **Docker** + **nginx** for production deployment

## References

- [Wikipedia: Galois Theory](https://en.wikipedia.org/wiki/Galois_theory)
- [NRICH: An Introduction to Galois Theory](https://nrich.maths.org/articles/introduction-galois-theory)
- [Keith Conrad: The Galois Correspondence](https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf)

## License

MIT
