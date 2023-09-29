import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+ input)
  }

  const formStyle = {
    margin: "0rem",
  };
  const field = {
    position: "relative",
    width: "100%",
    paddingTop:"40px"
  };
  const inputStyle = {
    border: "none",
    background: "linear-gradient(35deg,#494949,#313131)",
    fontSize: "1.5rem",
    color: "white",
    padding: "1rem 3rem",
    borderRadius: "1rem",
    outline: "none",
    width: "100%",
  };
  const image = {
    position: "absolute",
    top: "70%",
    left: "0%",
    transform: "translate(100%,-50%)",
    color: "white",
  };

  return (
    <form style={formStyle} onSubmit={submitHandler} >
      <div style={field}>
        <FaSearch style={image}></FaSearch>
        <input style={inputStyle} type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
      </div>
    </form>
  );
};

export default Search;
