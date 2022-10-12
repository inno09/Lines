

import React, { useState, useEffect } from 'react';
import PoemsContainer from "./PoemContainer";
import './Home.css';
const poemsAPI = " http://localhost:9292/poems";

function Home() {

    const [poems, setPoems] = useState([]);
//   const [formVisible, setFormVisible] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const poemsToDisplay = poems.filter((poem) => favoriteVisible || poem.isFavorite);
  useEffect(() => {
    fetch(poemsAPI)
      .then(response => response.json())
      .then(data => setPoems(data))
  }, []);
  function renderPoemView() {
    if (poemsToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <PoemsContainer poems={poemsToDisplay} 
        removePoem={removePoem} addToFavorites={addToFavorites}/>
      )
    }
  }

  function addPoem(newPoem) {
    setPoems([...poems, newPoem]);
  }


  // add a poem to my favorites and see it on a separate list
  function addToFavorites(favPoem) {
    setPoems(poems.map(poem => {
      return poem.id === favPoem.id ? {...favPoem, isFavorite: !favPoem.isFavorite} : poem
      }  
    ))
  }

  // delete a poem and they are still gone when I refresh the page
  function removePoem(poemToRemove) {
    setPoems(poems.filter(poem => poem.id !== poemToRemove.id))
  }

    return(
      <div className="card">
        <div className="cardContainer">
          {renderPoemView()}
        </div>
        </div>
    )
}

export default Home