import { DragDropBuilder } from '@repo/core';
import { Button } from '@repo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Turbo Toolkit: Web Page Builder</h1>
        <DragDropBuilder 
          initialComponents={['Header', 'Paragraph']} 
          className="w-full"
        />
        <div className="mt-8 flex space-x-4">
          <Button variant="default">Save Page</Button>
          <Button variant="outline">Preview</Button>
        </div>
      </div>
    </main>
  );
}
