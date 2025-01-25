/** @type {import('syncpack').Config} */
module.exports = {
  // Specify the type of dependencies to check
  dependencyTypes: [
    'dev',
    'peer',
    'prod',
    'optional'
  ],
  
  // Specify which package.json files to check
  specs: [
    { 
      files: [
        'package.json', 
        'packages/*/package.json', 
        'apps/*/package.json'
      ]
    }
  ],
  
  // Specify version groups to enforce consistent versions
  semverGroups: [
    {
      // Enforce consistent versions for these dependencies across all packages
      dependencies: [
        '@biomejs/biome',
        'husky',
        'turbo',
        'typescript',
        'vite',
        'vitest',
        'eslint',
        'prettier',
        'playwright',
        'react',
        'react-dom'
      ],
      // Use the highest semver version across all packages
      policy: 'highest'
    }
  ],
  
  // Sort dependencies alphabetically
  sortAz: ['dependencies', 'devDependencies', 'peerDependencies'],
  
  // Configure output
  output: {
    lineWidth: 100
  }
};
