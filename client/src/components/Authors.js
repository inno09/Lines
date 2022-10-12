import React, {useEffect, useState} from "react";

function Author() {

  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/authors")
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
            <h3>Poem:{author.title}</h3>
            <p>Content:{author.content}</p>
          </div>
        </div>
      ))}
    </div>
   </div>);
}

export default Author;