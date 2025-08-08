import { json } from "stream/consumers";

export const loadState = () => {
  try {
    const serialzedState = localStorage.getItem("appState");
    if (serialzedState === null) {
      return undefined;
    }
    return JSON.parse(serialzedState);
  } catch (err) {
    console.warn("Failed to load state from local storage:", err);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serialzedState = JSON.stringify(state);
    localStorage.setItem("appState", serialzedState);
  } catch (err) {
    console.warn("Failed to save state to local storage:", err);
  }
};
