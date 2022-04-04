import React from "react";
import { useLocation, Link } from "react-router-dom";

import { capitalise } from "../utils/utils";

import { NavLink } from "./../styled-components/navbar";
import { MainCont, SubCont } from "../styled-components/reusables";
import Footer from "../components/Footer";

export default function SavedQuotes() {
  let location = useLocation();
  return (
    <MainCont>
      <SubCont>
        <NavLink>
          <Link to="/" className="links">
            POSTS
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/quotes" className="links">
            QUOTES
          </Link>
        </NavLink>
      </SubCont>
      <Footer
        page={
          location.pathname === "/menu" ? "Menu" : capitalise(location.pathname)
        }
      />
    </MainCont>
  );
}
