import React from "react";
import menu from "./../images/menu.svg";
import { Logo, Img, NavCont, Btn } from "../styled-components/reusables";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  function handleClick() {
    if (!location === "/menu") {
      navigate("/menu");
    } else {
      navigate(-1);
    }
  }
  return (
    <NavCont>
      <Link to="/" className="links">
        <Logo>JOURNAL</Logo>
      </Link>
      <Btn onClick={() => handleClick()}>
        <Img src={menu} width="3rem" />
      </Btn>
    </NavCont>
  );
}
