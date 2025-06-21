import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const existingItem = state.favourites.find(
        job => job.id === action.payload.id,
      );
      if (!existingItem) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        job => job.id !== action.payload.id,
      );
    },
  },
});

export const { addFavourite, removeFavourite } = jobSlice.actions;

export default jobSlice.reducer;
