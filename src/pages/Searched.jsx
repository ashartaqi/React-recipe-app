import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearchedRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&SearchedRecipes=${name}`
    );
    const recipes = await api.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSearchedRecipes(params.item);
    };

    fetchData();
  }, [params.item]);

  const Grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gridGap: "3rem",
  };

  const cardImage = {
    width: "100%",
    borderRadius: "2rem",
  };

  const cardText = {
    textAlign: "center",
    padding: "1rem",
  };

  const cardAnchortag = {
    textDecoration: "none"
  };

  return (
    <div style={Grid}>
      {searchedRecipes.map((item) => {
        return (
          <Link to={"/recipe/" + item.id} style={cardAnchortag}>
            <div key={item.id}>
              <img style={cardImage} src={item.image} alt="" />
              <h4 style={cardText}>{item.title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Searched;
