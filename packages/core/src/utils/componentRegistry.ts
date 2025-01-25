// Component Registry
// This file manages registration and lookup of components

import React from 'react';

export interface ComponentRegistryEntry {
  name: string;
  component: React.ComponentType<Record<string, unknown>>;
}

const registry = new Map<string, ComponentRegistryEntry>();

export function registerComponent(entry: ComponentRegistryEntry): void {
  registry.set(entry.name, entry);
}

export function getComponent(name: string): ComponentRegistryEntry | undefined {
  return registry.get(name);
}

export function listComponents(): ComponentRegistryEntry[] {
  return Array.from(registry.values());
}

export function clearRegistry(): void {
  registry.clear();
}

export default {
  registerComponent,
  getComponent,
  listComponents,
  clearRegistry
};
