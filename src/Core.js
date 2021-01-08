import keys from './Keys';

class Resource {
  constructor(key, desc, modifiers, requirements) {
    this.key = key;
    this.desc = desc;
    this.modifiers = modifiers;
    this.requirements = requirements;
    this.amount = 0;
  }

  add(num) {
    this.amount += num;
  }

  subtract(num) {
    this.add(-num);
  }
}

class Inventory {
  constructor() {
    this[keys.branch.key] = new Resource(keys.branch.key, keys.branch.desc); 
  }

  get(resourceName) {
    return this[resourceName];
  }
}

export default Inventory;