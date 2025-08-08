import { combineReducers, configureStore } from "@reduxjs/toolkit";
import setsReducer from "./setsSlice";
import cardsReducer from "./cardsSlice";
import { saveState, loadState } from "./localStorage";

const rootReducer = combineReducers({
  sets: setsReducer,
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const preloadedState = loadState() as Partial<RootState>;

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    sets: store.getState().sets,
    cards: store.getState().cards,
  });
});

export type AppDispatch = typeof store.dispatch;

export default store;
