// src/components/CardList.jsx

// Import React and useEffect hook
import React, { useEffect } from "react";

// Import the useDispatch and useSelector hooks from React Redux
import { useDispatch, useSelector } from "react-redux";

// Import the addPokemon action from the slice
import { addPokemon } from "../redux/pokemonSlice";

// Import the Card component
import Card from "./Card";

// Define the CardList component
const CardList = () => {
  // Get the dispatch function from useDispatch
  const dispatch = useDispatch();

  // Get the pokemon array from the store using useSelector
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  // Define the useEffect hook to fetch the data from the API
  useEffect(() => {
    // Define the async function to fetch the data
    const fetchData = async () => {
      // Make a GET request to the API endpoint
      const response = await fetch(
        "https://pokeapi.deno.dev/pokemon?limit=50"
      );

      // Parse the response as JSON
      const data = await response.json();

      // Use the forEach method and the Object.values method to iterate over the data object and dispatch the addPokemon action for each item
      Object.values(data).forEach((item) => {
        dispatch(addPokemon(item));
      });
    };

    // Invoke the async function
    fetchData();
  }, [dispatch]); // Pass the dispatch function as a dependency

  // Return the JSX for the card list
  return (
    <div className="cards">
      {pokemon.map((item) => (
        // Render a Card component for each item in the pokemon array
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

// Export the CardList component
export default CardList;
