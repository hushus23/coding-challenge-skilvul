// src/components/Card.jsx

// Import React
import React from "react";

// Define the Card component
const Card = ({ item }) => {
  // Return the JSX for the card
  return (
    <li>
    <a href="" class="card">
    <img src={item.imageUrl} class="card_image" style={{backgroundColor:item.color}} alt="" />
    <div class="card_overlay">
        <div class="row card_header"style={{backgroundColor:item.color}}>
            <h3 class="col-6 col-sm-3 card_title">{item.name}</h3>            
            <ul className="col-6 col-sm-3 card_tag">{item.types.map((type) => (
                <li class="Btn" key={type}>{type}</li>
                ))}
            </ul>
        </div>
        <p class="card_description">{item.description}</p>
    </div>
    </a>      
    </li>
  );
};

// Export the Card component
export default Card;
