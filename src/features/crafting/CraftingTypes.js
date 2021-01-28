export const craftingTypes = {};
createCraftingEntry('wooden_axe', 'Wooden Axe', 5, { wood: 2 }, ['wooden'], ['wood']);
createCraftingEntry('stone_axe', 'Stone Axe', 15, { wood: 40, stone: 5 }, ['stone'], ['wood']);
createCraftingEntry('iron_axe', 'Iron Axe', 30, { wood: 40, iron: 5 }, ['iron'], ['wood']);
createCraftingEntry('diamond_axe', 'Diamond Axe', 45, { wood: 40, diamond: 5 }, ['diamond'], ['wood']);
createCraftingEntry('obsidian_axe', 'Obsidian Axe', 60, { wood: 40, obsidian: 5 }, ['obsidian'], ['wood']);

createCraftingEntry('stone_pick', 'Stone Pickaxe', 20, { wood: 40, stone: 5 }, ['stone'], ['stone']);
createCraftingEntry('iron_pick', 'Iron Pickaxe', 30, { wood: 40, iron: 5 }, ['iron'], ['stone', 'iron']);
createCraftingEntry('diamond_pick', 'Diamond Pickaxe', 40, { wood: 40, diamond: 5 }, ['diamond'], ['stone', 'iron', 'diamond']);
createCraftingEntry('obsidian_pick', 'Obsidian Pickaxe', 50, { wood: 40, obsidian: 5 }, ['obsidian'], ['stone', 'iron', 'diamond', 'obsidian']);

createCraftingEntry('stone_mine', 'Stone Mine', 10, { wood: 10 }, ['unlock'], ['stone']);
createCraftingEntry('coal_mine', 'Coal Mine', 10, { wood: 150 }, ['unlock'], ['coal']);
createCraftingEntry('iron_mine', 'Iron Mine', 60, { wood: 100, stone: 25 }, ['unlock'], ['iron']);
createCraftingEntry('diamond_mine', 'Diamond Mine', 90, { wood: 500, iron: 50 }, ['unlock'], ['diamond']);
createCraftingEntry('obsidian_mine', 'Obsidian Mine', 120, { wood: 1000, diamond: 75 }, ['unlock'], ['obsidian']);

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