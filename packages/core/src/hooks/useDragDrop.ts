import { useState, useCallback } from 'react';

export const useDragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    isDragging,
    handleDragStart,
    handleDragEnd
  };
};
