import React from "react";
import menu from "./../images/menu.svg";
import { Logo, Img, NavCont } from "../styled-components/reusables";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavCont>
      <Link to="/" className="links">
        <Logo>JOURNAL</Logo>
      </Link>
      <Img src={menu} width="3rem" />
    </NavCont>
  );
}
