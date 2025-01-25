import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactCompiler: {
      enabled: true,
      compilationMode: 'infer'
    }
  },
  experimental: {
    reactCompiler: true
  },
  webpack: (config, { isServer }) => {
    // Add Biome as a linter
    if (!isServer) {
      config.plugins.push(
        new (require('biome-webpack-plugin'))({
          configPath: path.resolve(__dirname, '../../biome.json')
        })
      );
    }
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [
            ['babel-plugin-react-compiler', {
              compilationMode: 'infer',
              runtimeModule: 'react-compiler-runtime'
            }]
          ]
        }
      }
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
    NEXT_PUBLIC_API_URL: (() => {
      switch (process.env.NEXT_PUBLIC_APP_ENV) {
        case 'production':
          return 'https://api.turbo-toolkit.com';
        case 'staging':
          return 'https://staging-api.turbo-toolkit.com';
        case 'development':
        default:
          return 'http://localhost:3001';
      }
    })()
  }
};

export default nextConfig;
