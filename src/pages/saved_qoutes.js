import React from "react";

import { useLocation } from "react-router-dom";
import Capitalise from "../utilitties/utils";

import { SubCont } from "../styled-components/reusables";
import Footer from "../components/Footer";

export default function SavedQuotes() {
  let location = useLocation();
  return (
    <>
      <SubCont>QUOTES</SubCont>);
      <Footer
        page={
          location.pathname === "/"
            ? "All Tasks"
            : Capitalise(location.pathname)
        }
      />
    </>
  );
}
