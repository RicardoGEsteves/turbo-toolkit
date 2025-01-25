# Contributing to Turbo Toolkit

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Run tests and linting
6. Commit your changes
7. Push to your fork
8. Create a pull request

## Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/turbo-toolkit.git
cd turbo-toolkit

# Install dependencies
pnpm install
```

### Running Development Server

```bash
# Run all workspaces in development mode
pnpm dev

# Run specific workspace
pnpm --filter @repo/web dev
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests for a specific workspace
pnpm --filter @repo/ui test
```

### Linting

```bash
# Lint all workspaces
pnpm lint

# Lint specific workspace
pnpm --filter @repo/core lint
```

## Dependency Management

### Adding Dependencies

When adding a new dependency to a workspace:

```bash
# Add to a specific workspace
pnpm --filter @repo/ui add package-name

# Add as a dev dependency
pnpm --filter @repo/core add -D package-name
```

### Dependency Best Practices

1. **Workspace-Specific Dependencies**
   - Only add dependencies to the workspace that truly needs them
   - Avoid duplicating dependencies across workspaces

2. **Version Management**
   - Use `syncpack` to manage and sync dependency versions
   - Run `pnpm deps:check` before committing changes
   - Use `pnpm deps:fix` to automatically resolve version mismatches

3. **Dependency Types**
   - Use production dependencies for runtime requirements
   - Use dev dependencies for build, testing, and development tools
   - Minimize peer dependencies

### Updating Dependencies

```bash
# Check for outdated dependencies
pnpm outdated

# Update all dependencies
pnpm update

# Update a specific package in a workspace
pnpm --filter @repo/web update package-name
```

### Troubleshooting

- If you encounter dependency conflicts, use `pnpm deps:fix`
- For complex dependency issues, consult the project maintainers
- Always test thoroughly after updating dependencies

## UI Package Contributions

### UI Package Contributions

When contributing to the UI package:

1. Follow React component best practices
2. Use TypeScript with strict type checking
3. Write Storybook stories for each component
4. Ensure components are accessible (WCAG compliant)
5. Add unit tests for component logic and interactions

#### Component Development Workflow

```bash
# Navigate to UI package
cd packages/ui

# Run Storybook
pnpm storybook

# Run component tests
pnpm test
```

#### Component Guidelines

- Use Tailwind CSS for styling
- Keep components modular and reusable
- Document props and their types
- Handle edge cases and provide sensible defaults

## Commit Message Convention

- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Be descriptive and concise

## Code of Conduct

- Be respectful
- Collaborate constructively
- Follow SOLID and DRY principles
- Maintain high code quality

## Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Add description of changes in PR
4. Wait for code review
