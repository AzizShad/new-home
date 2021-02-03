export const craftingTypes = {};

createCraftingEntry('wooden_axe', 'Wooden Axe', 5, { wood: 2 }, ['wooden'], ['wood']);
createCraftingEntry('stone_axe', 'Stone Axe', 15, { wood: 40, stone: 5 }, ['stone'], ['wood']);
createCraftingEntry('iron_axe', 'Iron Axe', 30, { wood: 40, iron: 5 }, ['iron'], ['wood']);
createCraftingEntry('diamond_axe', 'Diamond Axe', 45, { wood: 40, diamond: 5 }, ['diamond'], ['wood']);
createCraftingEntry('obsidian_axe', 'Obsidian Axe', 60, { wood: 40, obsidian: 5 }, ['obsidian'], ['wood']);

createCraftingEntry('stone_pick', 'Stone Pickaxe', 20, { wood: 50, stone: 10 }, ['stone'], ['stone']);
createCraftingEntry('iron_pick', 'Iron Pickaxe', 30, { wood: 50, iron: 10 }, ['iron'], ['stone', 'iron']);
createCraftingEntry('diamond_pick', 'Diamond Pickaxe', 40, { wood: 50, diamond: 10 }, ['diamond'], ['stone', 'iron', 'diamond']);
createCraftingEntry('obsidian_pick', 'Obsidian Pickaxe', 50, { wood: 50, obsidian: 10 }, ['obsidian'], ['stone', 'iron', 'diamond', 'obsidian']);

createCraftingEntry('stone_mine', 'Stone Mine', 10, { wood: 10 }, ['unlock'], ['stone']);
createCraftingEntry('coal_mine', 'Coal Mine', 10, { wood: 150, stone: 50 }, ['unlock'], ['coal']);
createCraftingEntry('iron_mine', 'Iron Mine', 60, { wood: 200, stone: 100 }, ['unlock'], ['iron']);
createCraftingEntry('diamond_mine', 'Diamond Mine', 90, { wood: 500, stone: 250, iron: 50 }, ['unlock'], ['diamond']);
createCraftingEntry('obsidian_mine', 'Obsidian Mine', 120, { wood: 1000, stone: 500, iron: 100, diamond: 75 }, ['unlock'], ['obsidian']);

createCraftingEntry('tent', 'Tent', 10, { wood: 25 }, null, null, 1);
createCraftingEntry('house', 'House', 20, { wood: 250, stone: 50 }, null, null, 2);
createCraftingEntry('small_village', 'Small Village', 30, { wood: 500, stone: 100, iron: 50 }, null, null, 3);
createCraftingEntry('village', 'Village', 40, { wood: 1000, stone: 500, iron: 100, diamond: 50 }, null, null, 4);
createCraftingEntry('town', 'Town', 50, { wood: 10000, stone: 1000, iron: 500, diamond: 100, obsidian: 50 }, null, null, 5);
createCraftingEntry('city', 'City', 60, { wood: 100000, stone: 10000, iron: 5000, diamond: 1000, obsidian: 500 }, null, null, 10);

function createCraftingEntry(key, desc, timeout, requirements, modifiers = ['default'], effectedResources = [], additionalPersons) {
  craftingTypes[key] = {
    key: key,
    desc: desc,
    timeout: timeout,
    requirements: requirements,
    modifiers: modifiers,
    effectedResources: effectedResources,
    enabled: true,
    craftable: false,
    crafted: false,
    additionalPersons: additionalPersons
  };
}