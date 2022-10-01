import {
  addEntity,
  addComponent,
  removeEntity,
  defineQuery,
  hasComponent,
} from "bitecs";

export class BaseEntityProxy {
  static components = {};
  static defaults = {};
  static componentProxyClasses = {};

  constructor(eid, world) {
    this.eid = eid;
    this.world = world;
    const components = Object.entries(this.constructor.components);
    for (const [componentName, component] of components) {
      this.addComponentProxy(componentName, component);
    }
  }

  using(eid, world) {
    this.eid = eid;
    this.world = world;
    return this;
  }

  update(world) {}

  set(props = {}) {
    for (const componentName of Object.keys(props)) {
      for (const [name, value] of Object.entries(props[componentName])) {
        if (this[componentName]) {
          this[componentName][name] =
            typeof value === "function" ? value() : value;
        }
      }
    }
    return this;
  }

  add(components = {}, componentProxyClasses = {}) {
    for (const [componentName, component] of Object.entries(components)) {
      if (!this[componentName])
        this.addComponentProxy(componentName, component, {
          ...this.constructor.componentProxyClasses,
          ...componentProxyClasses,
        });
      addComponent(this.world, component, this.eid);
    }
    return this;
  }

  static spawn(world, props = {}) {
    const eid = addEntity(world);
    const proxy = new this(eid, world);
    for (const component of Object.values(this.components)) {
      addComponent(world, component, eid);
    }
    return proxy.set(this.defaults).set(props);
  }

  remove() {
    removeEntity(this.world, this.eid);
  }

  static get query() {
    if (!this._query) {
      this._query = this.defineQuery();
    }
    return this._query;
  }

  static defineQuery(additionalComponents = []) {
    return defineQuery([
      ...Object.values(this.components),
      ...additionalComponents,
    ]);
  }

  addComponentProxy(
    componentName,
    component,
    componentProxyClasses = this.constructor.componentProxyClasses
  ) {
    const ComponentProxyClass =
      componentProxyClasses[componentName] || GenericComponentProxy;
    this[componentName] = new ComponentProxyClass(component, this);
    return this;
  }
}

export const ComponentProxyMixin = (BaseClass) =>
  class extends BaseClass {
    using(eid, world) {
      this.parent.eid = eid;
      this.parent.world = world;
      return this;
    }
    hasComponent() {
      return hasComponent(this.parent.world, this.component, this.parent.eid);
    }
    defineComponentProperties(component, parent) {
      this.parent = parent || this;
      this.component = component;
      for (const name of Object.keys(component)) {
        defineComponentProperty(this.component, this.parent, this, name);
      }
    }
  };

export const GenericComponentProxy = ComponentProxyMixin(
  class {
    constructor(component, parent) {
      this.defineComponentProperties(component, parent);
    }
  }
);

export function defineComponentProperty(
  component,
  parent,
  proxy,
  componentPropertyName,
  proxyPropertyName = componentPropertyName
) {
  if (typeof proxy[proxyPropertyName] !== "undefined") return;
  Object.defineProperty(proxy, proxyPropertyName, {
    get: () => component[componentPropertyName][parent.eid],
    set: (value) => {
      const componentProperty = component[componentPropertyName];
      if (componentProperty[parent.eid].set) {
        componentProperty[parent.eid].set(value);
      } else {
        componentProperty[parent.eid] = value;
      }
    },
    enumerable: true,
  });
}

export function updateEntities(world, updates) {
  for (const [
    Entity,
    customUpdate = () => {},
    query = Entity.query,
  ] of updates) {
    const eids = query(world);
    const entity = new Entity();
    for (const eid of eids) {
      entity.using(eid, world);
      customUpdate(entity);
      entity.update();
    }
  }
  return world;
}

export const entityUpdater = (entityUpdates = []) => {
  return (world) => {
    updateEntities(world, entityUpdates);
    return world;
  }
};

export function setEid(eid, ...proxies) {
  proxies.forEach((proxy) => (proxy.eid = eid));
}
