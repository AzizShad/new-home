import { createSlice } from '@reduxjs/toolkit';
import { craftingTypes } from '../crafting/CraftingTypes';

const createDefaultCrafting = () => {
  if (localStorage.getItem('state')) {
    const savedCrafting = JSON.parse(localStorage.getItem('state'))?.crafting;
    if (savedCrafting) {
      //This is to avoid being disabled on load, enhance later
      for (let key in savedCrafting) {
        savedCrafting[key].enabled = true;
      }
      return savedCrafting;
    }
  }

  let crafting = {};
  for (const key in craftingTypes) {
    crafting[key] = Object.assign({}, craftingTypes[key]);
  }
  return crafting;
}

export const craftingSlice = createSlice({
  name: 'crafting',
  initialState: createDefaultCrafting(),
  reducers: {
    createTool: (state, action) => {
      const { craftingId } = action.payload;
      const craftingItem = state[craftingId];
      craftingItem.craftable = false;
      craftingItem.crafted = true;
    },
    disableItem: (state, action) => {
      debugger;
      const { craftingId } = action.payload;
      const craftingItem = state[craftingId];
      craftingItem.enabled = false;
    },
    checkCraftingRequirements: (state, action) => {
      const { inventory } = action.payload;
      for (let key in state) {
        const item = state[key];
        const requirements = item.requirements;
        let hasRequirements = true;
        for (let resourceId in requirements) {
          const resource = inventory[resourceId];
          if (resource.amount < requirements[resourceId]) {
            hasRequirements = false;
          }
        }
        if (hasRequirements && !item.crafted) {
          item.craftable = true;
        }
      }
    }
  },
});

export const {
  createTool,
  disableItem,
  checkCraftingRequirements
} = craftingSlice.actions;

export default craftingSlice.reducer;
