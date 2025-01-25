import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { expect } from '@storybook/test';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          }
        ]
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'default'
  },
  play: async ({ args, canvasElement }) => {
    const button = canvasElement.querySelector('button');
    
    // Add a null check to satisfy TypeScript
    if (!button) {
      throw new Error('Button not found in the canvas');
    }
    
    // Accessibility checks
    const results = await axe(button);
    expect(results).toHaveNoViolations();
    
    // Additional checks
    expect(button).toHaveAttribute('role', 'button');
  }
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm'
  }
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg'
  }
};

export const IconButton: Story = {
  args: {
    children: '🚀',
    size: 'icon',
    'aria-label': 'Launch rocket'
  }
};
