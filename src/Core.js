import keys from './Keys';

class Resource {
  constructor(key, name, modifiers, requirements) {
    this.key = key;
    this.name = name;
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
}

export default Inventory;