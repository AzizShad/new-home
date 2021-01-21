import { createSlice } from '@reduxjs/toolkit';
import { resourceList } from '../inventory/Inventory';

const createDefaultInventory = () => {
  if (localStorage.getItem('state')) {
    const savedIventory = JSON.parse(localStorage.getItem('state'))?.inventory;
    if (savedIventory) {
      //This is to avoid being disabled on load, enhance later
      for (let key in savedIventory) {
        savedIventory[key].enabled = true; 
      }
      return savedIventory;
    }
  }

  let inventory = {};
  for (let key in resourceList) {
    inventory[key] = resourceList[key];
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
      resource.amount += 1;
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
