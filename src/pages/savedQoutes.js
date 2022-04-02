import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import Capitalise from "../utils/utils";
import { getAllQuoteData } from "../utils/fetchy";

import { MainCont, SubCont } from "../styled-components/reusables";
import Footer from "../components/Footer";

export default function SavedQuotes() {
  const [data, setData] = useState();
  let location = useLocation();

  useEffect(() => {
    resolveData();
  }, []);

  const resolveData = () => {
    getAllQuoteData("http://127.0.0.1:8000/graphql")
      .then((result) => setData(result.data.allQuotes))
      .catch((error) => error);
  };
  return (
    <MainCont>
      <SubCont>
        QUOTES{" "}
        {data
          ? data.map((e) => (
              <div key={e.id}>
                <h1>{e.title}</h1>
                <p>{e.content}</p>
              </div>
            ))
          : "nothing"}
      </SubCont>
      <Footer
        page={
          location.pathname === "/"
            ? "All Posts"
            : Capitalise(location.pathname)
        }
      />
    </MainCont>
  );
}
