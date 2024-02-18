import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addPokemon } from "../redux/pokemonSlice";

import Card from "./Card";

const CardList = () => {
  
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon.pokemon);

  useEffect(() => {
    
    const fetchData = async () => {
      
      const response = await fetch(
        "https://pokeapi.deno.dev/pokemon?limit=50"
      );

      
      const data = await response.json();

      Object.values(data).forEach((item) => {
        dispatch(addPokemon(item));
      });
    };

    fetchData();
  }, [dispatch]); 

  return (
    <div className="cards">
      {pokemon.map((item) => (
        
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};


export default CardList;
