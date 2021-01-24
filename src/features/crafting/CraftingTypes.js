export const craftingTypes = {};
createCraftingEntry('wooden_axe', 'Wooden Axe', 15, { wood: 15 }, ['wooden'], ['wood']);
createCraftingEntry('wooden_pick', 'Wooden Pick', 30, { wood: 30 }, ['wooden'], ['rock']);
createCraftingEntry('stone_axe', 'Stone Axe', 60, { wood: 30, rock: 20 }, ['rock'], ['wood']);
createCraftingEntry('stone_pickaxe', 'Stone Pickaxe', 90, { wood: 40, rock: 40 }, ['rock'], ['rock']);



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