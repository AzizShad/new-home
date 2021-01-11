import { createSlice } from '@reduxjs/toolkit';
import { resourceList } from '../inventory/Inventory';

const createDefaultInventory = () => {
  let inventory = {};
  for (let key in resourceList) {
    inventory[key] = resourceList[key];
  };
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
    }
  },
});

export const { addResource } = inventorySlice.actions;

export default inventorySlice.reducer;
