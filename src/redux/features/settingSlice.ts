import { createSlice } from '@reduxjs/toolkit';

export interface SettingState {
  isLight: boolean;
}

const initialState: SettingState = {
  isLight: true
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
