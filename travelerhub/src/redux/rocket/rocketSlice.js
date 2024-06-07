import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => {
      return action.payload;
    },
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      return state.map(rocket =>
        rocket.id === rocketId ? { ...rocket, reserved: true } : rocket
      );
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      return state.map(rocket =>
        rocket.id === rocketId ? { ...rocket, reserved: false } : rocket
      );
    }
  }
});

export const { setRockets, reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
