import { test, expect } from '@playwright/test';

test('homepage has correct title and components', async ({ page }) => {
  await page.goto('/');
  
  // Check page title
  await expect(page).toHaveTitle(/Turbo Toolkit/);
  
  // Check for main drag-and-drop builder
  const dragDropBuilder = await page.getByTestId('drag-drop-builder');
  await expect(dragDropBuilder).toBeVisible();
  
  // Check for action buttons
  const saveButton = await page.getByRole('button', { name: /Save Page/i });
  const previewButton = await page.getByRole('button', { name: /Preview/i });
  
  await expect(saveButton).toBeVisible();
  await expect(previewButton).toBeVisible();
});
