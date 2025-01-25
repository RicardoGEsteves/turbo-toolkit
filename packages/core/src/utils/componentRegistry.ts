// Component Registry
// This file manages registration and lookup of components

export interface ComponentRegistryEntry {
  name: string;
  component: React.ComponentType<any>;
}

export class ComponentRegistry {
  private static registry: Map<string, ComponentRegistryEntry> = new Map();

  static register(entry: ComponentRegistryEntry) {
    this.registry.set(entry.name, entry);
  }

  static get(name: string): ComponentRegistryEntry | undefined {
    return this.registry.get(name);
  }

  static list(): ComponentRegistryEntry[] {
    return Array.from(this.registry.values());
  }
}

export default ComponentRegistry;
