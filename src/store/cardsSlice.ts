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
    updateCard: (
      state,
      action: PayloadAction<{
        id: string;
        front?: string;
        back?: string;
      }>
    ) => {
      const idx = state.items.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0)
        state.items[idx] = { ...state.items[idx], ...action.payload };
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
    removeCardsBySetId: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.setId !== action.payload);
    },
    moveCardToSet: (
      state,
      action: PayloadAction<{ id: string; setId: string }>
    ) => {
      const card = state.items.find((c) => c.id === action.payload.id);
      if (card) {
        card.setId = action.payload.setId;
      }
    },
  },
});

export const {
  addCard,
  updateCard,
  removeCard,
  removeCardsBySetId,
  moveCardToSet,
} = cardsSlice.actions;
export default cardsSlice.reducer;
