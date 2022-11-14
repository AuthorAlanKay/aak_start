import { createSlice } from '@reduxjs/toolkit';

export interface SettingState {
  isLight: boolean;
  searchEngine: string;
  searchHistory: { timestamp: number; value: string }[];
}

const initialState: SettingState = {
  isLight: true,
  searchEngine: 'google',
  searchHistory: [{ timestamp: 1668422776497, value: 'test' }]
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLight = !state.isLight;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeTheme } = settingSlice.actions;

export default settingSlice.reducer;
