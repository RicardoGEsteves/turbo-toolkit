import React, { useState, ComponentPropsWithoutRef } from 'react';
import { Button } from '@repo/ui';
import { nanoid } from 'nanoid';

export interface DragDropBuilderProps extends ComponentPropsWithoutRef<'div'> {
  initialComponents?: string[];
  children?: React.ReactNode;
}

export const DragDropBuilder: React.FC<DragDropBuilderProps> = ({ 
  initialComponents = [],
  children,
  ...props 
}) => {
  const [components, setComponents] = useState(
    initialComponents.map(component => ({
      id: nanoid(),
      content: component
    }))
  );

  const addComponent = (componentName: string) => {
    setComponents([...components, { id: nanoid(), content: componentName }]);
  };

  return (
    <div {...props}>
      <div className="flex flex-wrap gap-2 mb-4">
        {components.map((component) => (
          <div key={component.id} className="p-2 bg-gray-100 rounded">
            {component.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => addComponent('Text Block')}>
          Add Text Block
        </Button>
        <Button onClick={() => addComponent('Image Block')}>
          Add Image Block
        </Button>
      </div>
      {children}
    </div>
  );
};
