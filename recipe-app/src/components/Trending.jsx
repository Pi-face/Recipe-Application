import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    <Wrapper>
      <h3>Trending</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {trending.map((recipe) => {
          return (
            <SplideSlide>
              <Card>
                <h1>{recipe.title}</h1>

                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
`;

export default Trending;
