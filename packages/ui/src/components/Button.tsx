import React from 'react';
import { cn } from '../utils/cn';
import { buttonVariants } from './buttonVariants';
import type { VariantProps } from 'class-variance-authority';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & 
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    'aria-label'?: string;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    'aria-label': ariaLabel,
    children,
    ...props 
  }, ref) => {
    const childrenText = React.isValidElement(children) 
      ? undefined 
      : children?.toString();

    return (
      <button
        ref={ref}
        aria-label={ariaLabel || childrenText}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps, buttonVariants };
