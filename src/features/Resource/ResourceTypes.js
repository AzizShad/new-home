export const resourceTypes = {};
createResourceEntry('wood', 'Wood', 1);
createResourceEntry('rock', 'Rock', 3, ['wooden_pick']);
createResourceEntry('iron', 'Iron', 9, ['stone_pick']);


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
  action: (state, resource, amount) => { return amount + 1 }
});
resourceModifiers.set('wooden', {
  title: 'Wood',
  display: false,
  description: 'You have a wooden tool! +1 modifier',
  action: (state, resource, amount) => { return amount + 1 }
});
resourceModifiers.set('rock', {
  title: 'Rock',
  display: false,
  description: 'You have a stone tool! +2 modifier',
  action: (state, resource, amount) => { return amount + 2 }
});
