import React from "react";

import { useLocation } from "react-router-dom";
import Capitalise from "../utils/utils";

import { SubCont } from "../styled-components/reusables";
import Footer from "../components/Footer";

export default function SavedQuotes() {
  let location = useLocation();
  return (
    <>
      <SubCont>QUOTES</SubCont>
      <Footer
        page={
          location.pathname === "/"
            ? "All Posts"
            : Capitalise(location.pathname)
        }
      />
    </>
  );
}
