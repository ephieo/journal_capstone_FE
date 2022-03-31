import React, { useState } from "react";
import menu from "./../images/menu.svg";
import { Logo, Img, NavCont, Btn } from "../styled-components/reusables";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  let navigate = useNavigate();

  function handleClick() {
    console.log(toggle);
    if (toggle === true) {
      setToggle(false);
      navigate(-1);
    } else {
      setToggle(true);
      navigate("/menu");
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
