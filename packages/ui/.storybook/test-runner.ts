import type { TestRunnerConfig } from '@storybook/test-runner';
import type { Page } from '@playwright/test';
import { expect } from 'vitest';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

interface ExtendedTestRunnerConfig extends TestRunnerConfig {
  testMatch?: (testFile: string) => Promise<boolean>;
  renderPage?: (page: Page) => Promise<void>;
  afterRender?: (page: Page) => Promise<void>;
}

// Utility function to compare images
async function compareScreenshots(actual: Buffer, baseline: string) {
  const baselineDir = path.join(process.cwd(), '__image_snapshots__');
  const baselinePath = path.join(baselineDir, baseline);

  try {
    // Create baseline directory if it doesn't exist
    await mkdir(baselineDir, { recursive: true });

    // If baseline doesn't exist, save the current screenshot as baseline
    try {
      await readFile(baselinePath);
    } catch {
      await writeFile(baselinePath, actual);
      return true;
    }

    // Read baseline image
    const baselineImage = await readFile(baselinePath);

    // Simple buffer comparison (you might want to use a more sophisticated image comparison library)
    const imagesMatch = Buffer.compare(actual, baselineImage) === 0;
    
    if (!imagesMatch) {
      // Optionally, save the diff for manual review
      const diffPath = path.join(baselineDir, `${path.basename(baseline, path.extname(baseline))}_diff${path.extname(baseline)}`);
      await writeFile(diffPath, actual);
    }

    return imagesMatch;
  } catch (error) {
    console.error('Screenshot comparison failed', error);
    return false;
  }
}

const config: ExtendedTestRunnerConfig = {
  setup() {
    // Custom expect matcher for image snapshots
    expect.extend({
      async toMatchImageSnapshot(received, snapshotName: string) {
        const pass = await compareScreenshots(received, snapshotName);
        
        return {
          pass,
          message: () => pass 
            ? 'Image matches baseline' 
            : `Image does not match baseline snapshot: ${snapshotName}`
        };
      }
    });
  },
  async preVisit(page) {
    await page.goto('http://localhost:6006');
  },
  async testMatch(testFile) {
    return testFile.includes('.stories.');
  },
  async renderPage(page) {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
  },
  async afterRender(page) {
    // You can add additional post-render logic here if needed
  }
};

export default config;
