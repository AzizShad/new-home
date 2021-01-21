import { configureStore } from '@reduxjs/toolkit';
import villageReducer from '../features/village/villageSlice';
import inventoryReducer from '../features/inventory/InventorySlice';

export default configureStore({
  reducer: {
    village: villageReducer,
    inventory: inventoryReducer
  },
});
