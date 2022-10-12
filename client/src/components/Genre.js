import React, {useEffect, useState} from "react";

function Genre() {

  const [genres, setGenre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then(response => response.json())
    .then((data) => setGenre(data));
    }, []);

    return (
      <div>
       <div className="author">
         {genres.map((genre) => (
           <div className="author-dets">
             <div>
               <h2>{genre.name}</h2>
             </div>
             {/* <div>
               <h3>Poem:{poem.title}</h3>
               <p>Content:{poem.content}</p>
             </div> */}
           </div>
         ))}
       </div>
      </div>);
   }

export default Genre;

