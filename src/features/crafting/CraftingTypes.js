export const craftingTypes = {};
createCraftingEntry('wooden_axe', 'Wooden Axe', 5, { wood: 2 }, ['wooden'], ['wood']);
createCraftingEntry('wooden_pick', 'Wooden Pick', 10, { wood: 10 }, ['wooden'], ['rock']);
createCraftingEntry('stone_axe', 'Stone Axe', 40, { wood: 40, rock: 5 }, ['rock'], ['wood']);
createCraftingEntry('stone_pick', 'Stone Pickaxe', 60, { wood: 100, rock: 25 }, ['rock'], ['rock']);



function createCraftingEntry(key, desc, timeout, requirements, modifiers = ['default'], effectedResources = []) {
  craftingTypes[key] = {
    key: key,
    desc: desc,
    timeout: timeout,
    requirements: requirements,
    modifiers: modifiers,
    effectedResources: effectedResources,
    enabled: true,
    craftable: false,
    crafted: false
  };
}