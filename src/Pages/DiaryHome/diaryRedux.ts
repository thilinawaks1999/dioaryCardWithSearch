import { createSlice } from "@reduxjs/toolkit";

export const diaryslice = createSlice({
  name: "diary",
  initialState: {
    diaries: [] as any,
    helperDiaries: [] as any,
  },

  reducers: {
    getDiaries: (state) => {
      return state;
    },

    setDiaries: (state, action) => {
      state.diaries = action.payload;
      state.helperDiaries = action.payload;
    },

    callUpdateDiary: (state, action) => {
      return state;
    },

    updateDiaries: (state, action) => {
      state.diaries = [action.payload, ...state.diaries];
      state.helperDiaries = [action.payload, ...state.helperDiaries];
    },

    searchDiary: (state, action) => {
      state.diaries = state.helperDiaries.filter((diary: any) => {
        return diary.data.title.includes(action.payload);
      });
    },
  },
});

export const { getDiaries, callUpdateDiary, searchDiary } = diaryslice.actions;

export default diaryslice.reducer;
