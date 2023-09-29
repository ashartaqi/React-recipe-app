import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    getRecipe()
  }, [params.id]);

  const getRecipe = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const recipes = await data.json();
      setRecipe(recipes);
      console.log(recipes);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
  

  const detailWrapper = {
    marginTop: "2rem",
    marginBottom: "5rem",
    // display: "flex",
  };
  const H2 = {
    marginBottom: "2rem",
  };
  const LI = {
    fontSize: "1.2rem",
    lineHeight: "2.5rem",
  };
  const UL = {
    marginTop: "2rem ",
  };
  const button = {
    padding: "1rem 2rem",
    color: "#313131",
    background: "white",
    border: "2px solid black",
    marginRight: "3rem",
    fontWeight: "600",
  };
  const miniContainer = {
    paddingTop:'40px',
    paddingBottom:'40px'
  };
  // const Info = {
  //   marginLeft: "10rem",
  // };

  return (
    <>
      {recipe ? (
        <div style={detailWrapper}>
          <div style={miniContainer}>
            <h2 style={H2}>{recipe.title}</h2>
            <img src={recipe.image} alt="" />
          </div>
          <div>
            <button style={button} onClick={() => setActive("instructions")}>
              Instructions
            </button>
            <button style={button} onClick={() => setActive("ingredients")}>
              Ingredients
            </button>
          </div>
          {active === "instructions" && (
            <div style={miniContainer}>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            </div>
          )}
          {active === "ingredients" && (
            <ul style={UL}>
              {recipe.extendedIngredients.map((ingredient) => {
                return (
                  <li style={LI} key={ingredient.id}>
                    {ingredient.original}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ):(
        <h2 style={H2}>Recipe is not available</h2>
      )
    }
    </>
  );
};

export default Recipe;
