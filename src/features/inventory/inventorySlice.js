import { createSlice } from '@reduxjs/toolkit';
import { resourceTypes, resourceModifiers } from '../resource/ResourceTypes';

const createDefaultInventory = () => {
  if (localStorage.getItem('state')) {
    const savedInventory = JSON.parse(localStorage.getItem('state'))?.inventory;
    if (savedInventory) {
      //This is to avoid being disabled on load, enhance later
      for (let key in savedInventory) {
        savedInventory[key].enabled = true; 
      }
      return savedInventory;
    }
  }

  let inventory = {};
  for (const key in resourceTypes) {
    inventory[key] = Object.assign({}, resourceTypes[key]);
  }
  return inventory;
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: createDefaultInventory(),
  reducers: {
    addResource: (state, action) => {
      const { resourceId } = action.payload;
      const resource = state[resourceId];
      const modifiers = resource.modifiers;
      let amount = resource.amount;
      if (!modifiers.length) {
        amount += 1
      } else {
        for (const modifierName of modifiers) {
          const modifierObject  = resourceModifiers.get(modifierName)
          if (modifierObject) {
            amount = modifierObject.action(state, resource)
          }
        }
      }

      /* 
       * perhaps there will be a "finalize" function that takes in
       * the state and the final amount after modifiers, and decides
       * what to ultimately do with the value
       */

      // amount = resource.finalize(state, amount)
      resource.amount = amount;
    },
    enableResource: (state, action) => {
      const { resourceId } = action.payload;
      const resource = state[resourceId];
      resource.enabled = true;
    },
    disableResource: (state, action) => {
      const { resourceId } = action.payload;
      const resource = state[resourceId];
      resource.enabled = false;
    }
  },
});

export const { addResource, enableResource, disableResource } = inventorySlice.actions;

export default inventorySlice.reducer;
