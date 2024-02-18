
import React, { useState } from "react";

import { useSelector } from "react-redux";

const SearchBar = () => {
  
  const [value, setValue] = useState("");

  const pokemon = useSelector((state) => state.pokemon.pokemon);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const filteredPokemon = pokemon.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toString().includes(value)
    );

    console.log(filteredPokemon);
  };

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

export default SearchBar;
