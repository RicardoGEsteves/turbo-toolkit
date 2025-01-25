# Turbo Toolkit: Next-Generation Web Page Builder

## Project Overview

Turbo Toolkit is a monorepo project designed to help developers create web applications with ease. It provides a complete set of tools and configurations to kickstart modern web development.

## Tech Stack

### Core Technologies
- **Language**: TypeScript
- **Frontend Framework**: React 19 with Experimental React Compiler
- **Web Framework**: Next.js 15 (App Router)
- **Package Manager**: pnpm
- **Monorepo Management**: Turborepo

### Development Tools
- **Linting & Formatting**: Biome (replacing ESLint and Prettier)
- **Styling**: Tailwind CSS 4
- **Testing**:
  - Unit Tests: Vitest
  - E2E Tests: Playwright
- **Component Development**: Storybook with A11y Testing

### Performance Optimization
- React Compiler with Infer Mode
- Automatic Memoization
- Optimized Rendering

## Project Structure

### Workspaces
- `@repo/ui`: Reusable UI components with Storybook integration
- `@repo/core`: Core business logic and composable components
- `@repo/web`: Main web application

## Key Features

- Drag-and-drop web page builder
- Highly composable React components
- Accessibility-first design
- Comprehensive testing suite
- Optimized performance with React Compiler

## Dependency Management

We use `syncpack` to ensure consistent dependency versions across workspaces.

### Dependency Commands
```bash
# List dependencies
pnpm deps:list

# Check for mismatches
pnpm deps:check

# Fix dependency versions
pnpm deps:fix
```

## Environment Support

Supports multiple environments:
- Development
- Staging
- Production

## CI/CD

Integrated GitHub Actions for:
- Linting
- Testing
- Building
- Deployment to Vercel

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and contribution process.

## License

Turbo Toolkit is open-source software licensed under the MIT License. 

See the [LICENSE](LICENSE) file for more details.

### Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Getting Started

### What is Turbo Toolkit?

Turbo Toolkit is a comprehensive turborepo with all the essential tools and configurations needed to kickstart modern web development. It provides a batteries-included monorepo setup that enables rapid, scalable, and efficient development across multiple packages.

### Development Toolchain

Our turborepo comes pre-configured with:
- Monorepo management via Turborepo
- Efficient package management
- Integrated development workflows
- Consistent code quality tools
- Seamless testing and build processes

### Prerequisites
- Node.js 22+
- pnpm 10+

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/turbo-toolkit.git

# Install dependencies
pnpm install

# Start development mode
pnpm dev
```

### Key Features
- Zero-configuration setup
- Integrated development tools
- Scalable architecture
- Performance-optimized builds

## Development Scripts

```bash
# Run all workspaces in development mode
pnpm dev

# Lint code
pnpm lint

# Run tests
pnpm test

# Build project
pnpm build
```

### UI Package Components

The `@turbo-toolkit/ui` package provides a set of reusable, customizable React components:

- `Button`: Flexible button component with multiple variants
- `Input`: Customizable input field with built-in validation and styling
- `Draggable`: Drag-and-drop component for interactive interfaces

## Package Structure

- `packages/core`: Core utilities and hooks
- `packages/ui`: Reusable UI components
