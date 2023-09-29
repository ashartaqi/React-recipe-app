import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if(check){
      setPopular(JSON.parse(check))
    }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes))
    setPopular(data.recipes);
    }
  };

  const card = {
    padding: "10px 20px",
    overflow: "hidden",
    borderRadius: "2rem",
    minHeight: "25rem",
  };

  const wrapper = {
    margin: "1rem 0",
  };

  const image = {
    borderRadius: "1rem",
    position: "absolute",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const para = {
    position: "absolute",
    zIndex: "10",
    left: "50%",
    bottom: "0%",
    transform: "translate(-50%, 0%)",
    color: "white",
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1rem",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={wrapper}>
      <h1>Popular picks</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipes) => {
          return (
            <SplideSlide key={recipes.id}>
              <Link to={"/recipe/" + recipes.id}>
                <div style={card}>
                  <p style={para}>{recipes.title}</p>
                  <img style={image} src={recipes.image} alt="" />
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
