import { addEntity, addComponent, removeEntity, defineQuery } from "bitecs";

export class BaseEntityProxy {
  static components = {};
  static defaults = {};

  static spawn(world, props = {}) {
    const eid = addEntity(world);
    const proxy = new this(eid, world);
    for (const component of Object.values(this.components)) {
      addComponent(world, component, eid);
    }
    return proxy.set(this.defaults).set(props);
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

  remove() {
    removeEntity(this.eid);
  }

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

  add(components = {}) {
    for (const [componentName, component] of Object.entries(components)) {
      if (!this[componentName])
        this.addComponentProxy(componentName, component);
      addComponent(this.world, component, this.eid);
    }
    return this;
  }

  addComponentProxy(componentName, component, replace = false) {
    if (!this[componentName] || replace) this[componentName] = {};
    const proxy = this[componentName];
    Object.keys(component).forEach((name) => {
      defineComponentProperty(this, proxy, component, name);
    });
    return this;
  }
}

export class GenericComponentProxy {
  constructor(component, eid) {
    this.eid = eid;
    defineComponentProperties(this, this, component);
  }
}

export class BaseComponentProxy {
  static component = null;
  constructor(eid) {
    this.eid = eid;
    defineComponentProperties(this, this, this.constructor.component);
  }
}

export function defineComponentProperties(parent, proxy, component) {
  Object.keys(component).forEach((name) => {
    defineComponentProperty(parent, proxy, component, name);
  });
}

export function defineComponentProperty(
  parent,
  proxy,
  component,
  componentPropertyName,
  proxyPropertyName = componentPropertyName
) {
  if (proxy[proxyPropertyName]) return;
  Object.defineProperty(proxy, proxyPropertyName, {
    get: () => component[componentPropertyName][parent.eid],
    set: (value) => (component[componentPropertyName][parent.eid] = value),
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
      entity.eid = eid;
      customUpdate(entity);
      entity.update(world);
    }
  }
  return world;
}

export function setEid(eid, ...proxies) {
  proxies.forEach((proxy) => (proxy.eid = eid));
}
