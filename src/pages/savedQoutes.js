import React, { useState, useEffect } from "react";

import { getAllQuoteData } from "../utils/fetchy";

import { MainCont, SubCont } from "../styled-components/reusables";
import QuoteBox from "../components/QuoteBox";

export default function SavedQuotes() {
  const [data, setData] = useState();

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
      <SubCont flex_dir="row" height="60vh">
        {data
          ? data.map((e) => (
              <SubCont key={e.id}>
                <QuoteBox title={e.title} content={e.content} data={e.date} />
              </SubCont>
            ))
          : "nothing"}
      </SubCont>
      <h1>...</h1>
    </MainCont>
  );
}
