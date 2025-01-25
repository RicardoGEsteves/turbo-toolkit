#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function removeNodeModules(dir) {
  const nodeModulesPath = path.join(dir, 'node_modules');
  try {
    await fs.remove(nodeModulesPath);
    console.log(`Removed: ${nodeModulesPath}`);
  } catch (err) {
    console.error(`Error removing ${nodeModulesPath}: ${err.message}`);
  }
}

async function removeLockFiles(dir) {
  const lockFiles = ['pnpm-lock.yaml', 'package-lock.json', 'yarn.lock'];
  for (const lockFile of lockFiles) {
    const lockPath = path.join(dir, lockFile);
    try {
      await fs.remove(lockPath);
      console.log(`Removed: ${lockPath}`);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Error removing ${lockPath}: ${err.message}`);
      }
    }
  }
}

async function cleanProject(dir) {
  try {
    const items = await fs.readdir(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = await fs.stat(itemPath);
      
      if (stat.isDirectory()) {
        if (item === 'node_modules') {
          await removeNodeModules(dir);
        } else if (item !== '.git' && item !== 'dist') {
          await cleanProject(itemPath);
        }
        
        await removeLockFiles(itemPath);
      }
    }
    
    await removeLockFiles(dir);
  } catch (err) {
    console.error(`Error in cleanProject: ${err.message}`);
  }
}

async function main() {
  console.log('Starting project cleanup...');
  await cleanProject(rootDir);
  console.log('Project cleanup completed.');
}

main().catch(console.error);
