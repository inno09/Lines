import React from "react";
import Poem from "./Poem";
import './Home.css';


function PoemsContainer({poems, removePoem, addToFavorites}) {
  return (
    <div className="poems-container">
      
      {/* render a list of <Poem> components in here */}
      {poems.map(poem => {
        return (
          <div className="card">
          <Poem 
            key={poem.id} 
            poem={poem} 
            removePoem={removePoem} 
            addToFavorites={addToFavorites} 
          />
          </div>
        )
        })}
    </div>
  );
}

export default PoemsContainer;
