import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: string;
  setId: string;
  front: string;
  back: string;
}

interface CardsState {
  items: Card[];
}

const initialCards: CardsState = { items: [] };

const cardsSlice = createSlice({
  name: "cards",
  initialState: initialCards,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.items.push(action.payload);
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const idx = state.items.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0) state.items[idx] = action.payload;
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCard, updateCard, removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
