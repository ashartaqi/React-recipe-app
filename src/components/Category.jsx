import {FaAccusoft, FaCookieBite} from "react-icons/fa"
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import { NavLink } from "react-router-dom"
// import { Styled } from "styled-components/dist/constructors/constructWithOptions"

const Category = () => {

const List = {
  display: "flex",
  justifyContent: "center",
  margin: "1rem 0rem",
};

const SLink = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginRight: "2rem",
  textDecoration: "none",
  background: "linear-gradient(35deg, #494949, #313131)",
  width: "6rem",
  height: "6rem",
  cursor: "pointer",
  transform: "scale(0.8)",
};

const H4 = {
  color: "white",
  fontSize: "0.8rem",
};

const image = {
  color: "white",
  fontSize: "1.5rem",
};


  return (
    <div style={List}>
      <NavLink style={SLink} to="/cusine/italian">
        <FaAccusoft style={image} />
        <h4 style={H4}>Italian</h4>
      </NavLink>
      <NavLink style={SLink} to="/cusine/american">
        <FaCookieBite style={image} />
        <h4 style={H4}>American</h4>
      </NavLink>
      <NavLink style={SLink} to="/cusine/thai">
        <GiNoodles style={image} />
        <h4 style={H4}>Thai</h4>
      </NavLink>
      <NavLink style={SLink} to="/cusine/japanese">
        <GiChopsticks style={image} />
        <h4 style={H4}>Japanese</h4>
      </NavLink>
    </div>
  );
};


export default Category