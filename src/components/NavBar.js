import React from "react";
import menu from "./../images/menu.svg";
import { Logo, Img, NavCont } from "../styled-components/reusables";

export default function Navbar() {
  return (
    <NavCont>
      <Logo>JOURNAL</Logo>
      <Img src={menu} width="3rem" />
    </NavCont>
  );
}
