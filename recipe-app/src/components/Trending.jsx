import React, { useEffect } from "react";

const Trending = () => {
  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=10`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Trending</div>;
};

export default Trending;
