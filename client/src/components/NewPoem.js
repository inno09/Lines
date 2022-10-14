import React, { useState } from 'react';
import './NewPoem.css';
import './Home.css';

const poemAPI = "/poems";

function NewPoemForm({addPoem}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author_id, setAuthor] = useState("");
  const [genre_id, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(poemAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author_id,
        genre_id
      }),
    })
      .then((r) => r.json())
      .then((newPoem) => addPoem(newPoem));

    setTitle("");
    setContent("");
    setAuthor();
    setGenre();

  }

  return (
    <div className="center">
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Author" 
        value={author_id}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input 
        placeholder="Genre" 
        value={genre_id}
        onChange={(e) => setGenre(e.target.value)}
      />

      <textarea 
        placeholder="Write your masterpiece here..." 
        rows={20} 
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Share your masterpiece" 
      />
    </form>
    </div>
  );
}

export default NewPoemForm;


