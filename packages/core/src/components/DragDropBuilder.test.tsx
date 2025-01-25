import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DragDropBuilder } from './DragDropBuilder';

describe('DragDropBuilder Component', () => {
  it('renders initial components', () => {
    const initialComponents = ['Component1', 'Component2'];
    const { container } = render(<DragDropBuilder initialComponents={initialComponents} />);
    
    const componentBlocks = container.querySelectorAll('.p-2.bg-gray-100.rounded');
    expect(componentBlocks.length).toBe(2);
    expect(componentBlocks[0].textContent).toBe('Component1');
    expect(componentBlocks[1].textContent).toBe('Component2');
  });

  it('renders add component buttons', () => {
    const { getByText } = render(<DragDropBuilder />);
    
    expect(getByText('Add Text Block')).toBeTruthy();
    expect(getByText('Add Image Block')).toBeTruthy();
  });
});
