import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await api.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCuisine(params.type);
    };

    fetchData();
  }, [params.type]);

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
    textDecoration: "none",
    color:"black"
  };

  return (
    <div style={Grid}>
      {cuisine.map((item) => {
        return (
          <Link key={item.id} to={"/recipe/" + item.id} style={cardAnchortag}>
              <img style={cardImage} src={item.image} alt="" />
              <h4 style={cardText}>{item.title}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Cuisine;
