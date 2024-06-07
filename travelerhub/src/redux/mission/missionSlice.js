import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    setMissions: (state, action) => {
      return action.payload;
    },
    joinMission: (state, action) => {
      return state.map(mission =>
        mission.mission_id === action.payload ? { ...mission, joined: true } : mission
      );
    },
    leaveMission: (state, action) => {
      return state.map(mission =>
        mission.mission_id === action.payload ? { ...mission, joined: false } : mission
      );
    },
  },
});

export const { setMissions, joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
