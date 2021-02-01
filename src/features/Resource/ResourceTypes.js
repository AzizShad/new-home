export const resourceTypes = {};
createResourceEntry('wood', 'Wood', 1);
createResourceEntry('stone', 'Stone', 3, ['stone_mine']);
createResourceEntry('coal', 'Coal', 3, ['coal_mine']);
createResourceEntry('iron', 'Iron', 6, ['iron_mine']);
createResourceEntry('diamond', 'Diamond', 9, ['diamond_mine']);
createResourceEntry('obsidian', 'Obsidian', 9, ['obsidian_mine']);

function createResourceEntry(key, desc, timeout, requirements = [], amount = 0, modifiers = ['default']) {
  resourceTypes[key] = {
    key: key,
    desc: desc,
    amount: amount,
    timeout: timeout,
    requirements: requirements,
    modifiers: modifiers,
    enabled: true,
    available: !requirements?.length
  };
}

/*
 * a modifier takes in the entire state, and the specific resource
 * it should return the new amount as an absolute value
 *
 * this means a modifier could potentially multiply, divide, or subtract
 * an existing value in a predictable way
 */
export const resourceModifiers = new Map()
resourceModifiers.set('default', {
  title: 'Default',
  display: false,
  description: 'Default +1 modifier',
  modifierDescription: '',
  action: (state, resource, amount) => { return amount + 1 }
});
resourceModifiers.set('unlock', {
  title: 'Unlock',
  display: false,
  description: 'You have unlocked this resource',
  modifierDescription: 'Unlocks',
  action: (state, resource, amount) => { return amount }
});
resourceModifiers.set('wooden', {
  title: 'Wood',
  display: false,
  description: 'You have a wooden tool! +1 modifier',
  modifierDescription: '+1 to',
  action: (state, resource, amount) => { return amount + 1 }
});
resourceModifiers.set('stone', {
  title: 'Stone',
  display: false,
  description: 'You have a stone tool! +2 modifier',
  modifierDescription: '+2 to',
  action: (state, resource, amount) => { return amount + 2 }
});
resourceModifiers.set('iron', {
  title: 'Iron',
  display: false,
  description: 'You have a Iron tool! +4 modifier',
  modifierDescription: '+4 to',
  action: (state, resource, amount) => { return amount * 2 }
});
resourceModifiers.set('diamond', {
  title: 'Diamond',
  display: false,
  description: 'You have a Diamond tool! +10 modifier',
  modifierDescription: '+10 to',
  action: (state, resource, amount) => { return amount * 5 }
});
resourceModifiers.set('obsidian', {
  title: 'Obsidian',
  display: false,
  description: 'You have a Obsidian tool! +25 modifier',
  modifierDescription: '+25 to',
  action: (state, resource, amount) => { return amount * 50 }
});
