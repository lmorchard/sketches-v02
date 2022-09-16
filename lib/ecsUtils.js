import { addEntity, addComponent, removeEntity, defineQuery } from "bitecs";

export class BaseEntityProxy {
  static components = {};
  static defaults = {};

  static spawn(world, props = {}) {
    const eid = addEntity(world);
    const proxy = new this(eid);
    for (const component of Object.values(this.components)) {
      addComponent(world, component, eid);
    }
    return proxy.set(props, this.defaults);
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

  constructor(eid) {
    this.eid = eid;
    const components = Object.entries(this.constructor.components);
    for (const [componentName, component] of components) {
      this.addComponentProxy(componentName, component);
    }
  }

  update(world) {}

  remove() {
    removeEntity(this.eid);
  }

  set(componentProps = {}, defaults = {}) {
    for (const [componentName, props] of Object.entries(componentProps)) {
      for (const [name, value] of Object.entries({
        ...(defaults[componentName] || {}),
        ...props,
      })) {
        this[componentName][name] =
          typeof value === "function" ? value() : value;
      }
    }
    return this;
  }

  addComponentProxy(componentName, component) {
    if (!this[componentName]) this[componentName] = {};
    const proxy = this[componentName];
    Object.keys(component).forEach((name) => {
      defineComponentProperty(this, proxy, component, name);
    });
  }

  addComponents(world, components = {}) {
    for (const [componentName, component] of Object.entries(components)) {
      if (!this[componentName])
        this.addComponentProxy(componentName, component);
      addComponent(world, component, this.eid);
    }
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

export function defineComponentProperty(parent, proxy, component, name) {
  if (proxy[name]) return;
  Object.defineProperty(proxy, name, {
    get: () => component[name][parent.eid],
    set: (value) => (component[name][parent.eid] = value),
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
