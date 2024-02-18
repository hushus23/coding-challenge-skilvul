import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    
    addPokemon(state, action) {
      state.pokemon.push(action.payload);
    },
    
    removePokemon(state, action) {
      state.pokemon = state.pokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
    
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

export const { addPokemon, removePokemon, updatePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
