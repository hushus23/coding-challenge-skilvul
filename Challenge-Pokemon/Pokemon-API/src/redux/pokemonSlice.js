// src/store/pokemonSlice.js

// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the Pokemon feature
const initialState = {
  pokemon: [],
};

// Create the slice for the Pokemon feature
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // Add a new Pokemon to the state
    addPokemon(state, action) {
      state.pokemon.push(action.payload);
    },
    // Remove a Pokemon from the state by id
    removePokemon(state, action) {
      state.pokemon = state.pokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
    // Update a Pokemon in the state by id
    updatePokemon(state, action) {
      const index = state.pokemon.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (index !== -1) {
        state.pokemon[index] = action.payload;
      }
    },
  },
});

// Export the actions and the reducer
export const { addPokemon, removePokemon, updatePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
