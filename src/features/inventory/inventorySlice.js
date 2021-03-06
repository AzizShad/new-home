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
          const modifierObject = resourceModifiers.get(modifierName)
          if (modifierObject) {
            amount = modifierObject.action(state, resource, amount)
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
    },
    removeResources: (state, action) => {
      const { requirements } = action.payload;
      for (let resourceId in requirements) {
        const resource = state[resourceId];
        resource.amount -= requirements[resourceId] || 0;
      }
    },
    addModifiers: (state, action) => {
      const { effectedResources, modifiers } = action.payload;
      effectedResources.forEach((resourceId) => {
        const resource = state[resourceId];
        modifiers.forEach(modifier => resource.modifiers.push(modifier));
      })
    },
    checkResourceRequirements: (state, action) => {
      const { craftingId } = action.payload;
      const inventory = state
      for (let resourceId in inventory) {
        const resource = inventory[resourceId];
        const requirements = resource.requirements;
        requirements.forEach(requirementId => {
          if(craftingId === requirementId) {
            resource.available = true;
          }
        });
      }
    }
  },
});

export const {
  addResource,
  enableResource,
  disableResource,
  removeResources,
  addModifiers,
  checkResourceRequirements
} = inventorySlice.actions;

export default inventorySlice.reducer;
