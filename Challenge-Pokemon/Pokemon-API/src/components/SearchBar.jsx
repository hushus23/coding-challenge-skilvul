// src/components/SearchBar.jsx

// Import React and useState hook
import React, { useState } from "react";

// Import the useSelector hook from React Redux
import { useSelector } from "react-redux";

// Define the SearchBar component
const SearchBar = () => {
  // Define the state for the input value
  const [value, setValue] = useState("");

  // Get the pokemon array from the store using useSelector
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  // Define the handleChange function to update the state with the input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Define the handleSubmit function to filter the pokemon array by name or id
  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Filter the pokemon array by name or id using the value
    const filteredPokemon = pokemon.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toString().includes(value)
    );

    // Log the filtered array to the console
    console.log(filteredPokemon);
  };

  // Return the JSX for the search bar
  return (
    <>
        <div class="container h-100 mt-3">
        <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
            <input 
            class="search_input" 
            type="text" name="" 
            placeholder="Search..."
            value={value}
            onChange={handleChange}
            />
            <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
        </div>
    </div>
  </>
  );
};

// Export the SearchBar component
export default SearchBar;
