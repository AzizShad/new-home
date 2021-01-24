import { configureStore } from '@reduxjs/toolkit';
import villageReducer from '../features/village/villageSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import craftingReducer from '../features/crafting/craftingSlice';

export default configureStore({
  reducer: {
    village: villageReducer,
    inventory: inventoryReducer,
    crafting: craftingReducer
  },
});
