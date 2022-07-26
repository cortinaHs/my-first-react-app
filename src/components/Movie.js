import React, { useState } from "react";

function Movie(props) {

  const [count, setCount] = useState(() => 0);

  const classStr = (count >= 10) ? "popular" : "";

  const increaseLikeCount = () => setCount((prevCount) => prevCount + 1)

  const decreaseLikeCount = () => setCount((prevCount) => prevCount === 0 ? 0 : prevCount- 1);


  return (
    
    <div className={"movie " + classStr}>
      <h3>{props.movie.title}</h3>
      <p>Rating: {props.movie.rating}</p>

      <p>Likes: { count }</p>

      <button onClick={increaseLikeCount}>Like</button> 
      <button onClick={decreaseLikeCount}>Dislike</button> 
    </div>

  );
  }
   
  export default Movie;