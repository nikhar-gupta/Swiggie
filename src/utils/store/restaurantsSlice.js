import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantList: [],
  },
  reducers: {
    addAllRestaurants: (state, action) => {
      state.restaurantList = action.payload;
    },
  },
});

export const { addAllRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
