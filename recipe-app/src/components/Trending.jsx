import React, { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=10`
    );
    const data = await api.json();
    console.log(data.recipes);
    setTrending(data.recipes);
  };

  return (
    <div>
      {trending.map((recipe) => {
        return (
          <section className='wrapper' key={recipe.id}>
            <div className='recipe-card'>
              <img src={recipe.image} alt='' />
              <p>{recipe.title}</p>
              <p>{recipe.readyInMinutes}</p>
              <p>{recipe.servings}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Trending;
