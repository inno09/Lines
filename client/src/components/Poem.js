import React, { useState } from 'react';


const poemAPI = "http://localhost:9292/poems";


function Poem({poem, removePoem, addToFavorites}) {
  const {title, content, author, genre, upvotes, downvotes} = poem;
  // const likes = {upvotes};
  // const dislikes = {downvotes};
  // sends a request to delete the poem from the database
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${poemAPI}/${poem.id}`, {
      method: "DELETE",
    });
    removePoem(poem);
  }


  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>- By {author} ,{genre}</strong></p>
      <div>
        <button type="button" class=" btn btn-primary ms-1 bg-light text-dark">
          🔼 <span class="badge bg-secondary">{upvotes}</span>
        </button>
        <button type="button" class="btn btn-primary ms-1 bg-light text-dark">
          🔽 <span class="badge bg-secondary">{downvotes}</span>
        </button>
        <div className="poem">
        <button type="button" class="btn btn-primary ms-1 bg-light text-dark" onClick={onDeleteClick} > 
          Delete 
        </button>
        {/* <button onClick={() => addToFavorites(poem)}> {poem.isFavorite ? "Unfavorite" : "⭐Favorite" }</button> */}
      </div>
      </div>
    </div>
  );
}

export default Poem;
