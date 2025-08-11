import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

interface Set {
  id: string;
  title: string;
  description?: string;
}

interface SetsState {
  items: Set[];
}

const initialState: SetsState = { items: [] };

const setsSlice = createSlice({
  name: "sets",
  initialState,
  reducers: {
    addSet: (state, action: PayloadAction<Set>) => {
      state.items.push(action.payload);
    },
    updateSet: (
      state,
      action: PayloadAction<{
        id: string;
        title?: string;
        description?: string;
      }>
    ) => {
      const idx = state.items.findIndex((s) => s.id === action.payload.id);
      if (idx >= 0)
        state.items[idx] = { ...state.items[idx], ...action.payload };
    },
    removeSet: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSet, updateSet, removeSet } = setsSlice.actions;
export default setsSlice.reducer;
