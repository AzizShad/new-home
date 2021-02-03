import { createSlice } from '@reduxjs/toolkit';

const createDefaultPeople = () => {
  if (localStorage.getItem('state')) {
    const savedPeople = JSON.parse(localStorage.getItem('state'))?.people;
    if (savedPeople) {
      return savedPeople;
    }
  }

  return {
    amount: 0,
    maxAmount: 0
  };
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState: createDefaultPeople(),
  reducers: {
    addPeople: (state, action) => {
      const { amount } = action.payload;
      state.amount += amount;
    }
  },
});

export const {
  addPeople  
} = peopleSlice.actions;

export default peopleSlice.reducer;
