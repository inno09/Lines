import React, {useEffect, useState} from "react";

function Author() {

  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    fetch("/authors")
    .then(response => response.json())
    .then((data) => setAuthor(data));
    }, []);

  return (
   <div>
    <div className="author">
      {authors.map((author) => (
        <div className="author-dets">
          <div>
            <h2>{author.name}</h2>
          </div>
          <div>
          <img src={ author.image } />
          </div>
          <div>
            <p>Description:{author.description}</p>
          </div>
        </div>
      ))}
    </div>
   </div>);
}

export default Author;