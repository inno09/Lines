import React, {useEffect, useState} from "react";
import Sidebar from './Sidebar';
import NewPoem from "./NewPoem";

function Author() {

  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    fetch("/authors")
    .then(response => response.json())
    .then((data) => setAuthor(data));
    }, []);

  return (
   <div>
      <Sidebar />
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
          <NewPoem /> 
        </div>
      ))}
    </div>
   </div>);
}

export default Author;