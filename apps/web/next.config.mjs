import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactCompiler: {
      compilationMode: 'annotation',
      runtimeModule: 'react-compiler-runtime',
    }
  },
  env: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
    NEXT_PUBLIC_API_URL: (() => {
      switch (process.env.NEXT_PUBLIC_APP_ENV) {
        case 'staging':
          return 'https://staging-api.turbo-toolkit.com';
        default:
          return 'http://localhost:3001';
      }
    })()
  },
  webpack: (config, { isServer }) => {
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
  }
};

export default nextConfig;
