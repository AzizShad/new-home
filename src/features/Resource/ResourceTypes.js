export const resourceTypes = {};
createResourceEntry('wood', 'Wood', 1);
createResourceEntry('rock', 'Rock', 3);

function createResourceEntry(key, desc, timeout, amount = 0, requirements, modifiers = ['default']) {
  resourceTypes[key] = {
    key: key,
    desc: desc,
    amount: amount,
    timeout: timeout,
    requirements: requirements,
    modifiers: modifiers,
    enabled: true
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
  action: (state, resource) => {return resource.amount + 1}
});
