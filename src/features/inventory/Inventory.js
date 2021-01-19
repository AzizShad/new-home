export const resourceList = {};
createResourceEntry('wood', 'Wood', 1);
createResourceEntry('rock', 'Rock', 3);

function createResourceEntry(key, desc, timeout, amount = 0, requirements, modifiers = []) {
  resourceList[key] = {
    key: key,
    desc: desc,
    amount: amount,
    timeout: timeout,
    requirements: requirements,
    modifiers: modifiers,
    enabled: true
  };
}
