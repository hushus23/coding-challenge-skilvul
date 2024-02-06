// src/store/store.js

// Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the Pokemon reducer
import pokemonReducer from "./pokemonSlice";

// Create and export the store
export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
