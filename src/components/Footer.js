import React, { useEffect, useState } from "react";
import { fetchData, postQuoteData } from "../utils/fetchy";
import { refreshPage } from "../utils/utils";

import { FooterCont, Logo, Img, Btn } from "../styled-components/reusables";
import {
  QuoteBox,
  PostTitle,
  Text,
} from "./../styled-components/home_elements";

import qt_add_btn from "./../images/quote-add.svg";
import { useNavigate } from "react-router-dom";

export default function Footer({ page }) {
  const [data, setData] = useState(null);
  const [click, setClick] = useState(true);

  let navigate = useNavigate();

  const url = `http://127.0.0.1:8000/graphql`;

  useEffect(() => {
    if (!localStorage.getItem("quoteData")) {
      resolveQuoteData();
    }
    setData(JSON.parse(localStorage.getItem("quoteData")));

    setTimeout(() => {
      localStorage.removeItem("quoteData");
      localStorage.removeItem("clicked?");
      setClick(false);
    }, 86400000);
    // eslint-disable-next-line
  }, []);

  function resolveQuoteData() {
    fetchData("https://type.fit/api/quotes", {})
      .then((data) => {
        localStorage.setItem(
          "quoteData",
          JSON.stringify(quoteRandomiser(data))
        );
        refreshPage("/");
      })
      .catch((error) => console.log(error));
  }

  function quoteRandomiser(data) {
    if (data) {
      let rand = Math.round(Math.random() * 100);
      return data[rand];
    }
  }

  function handleQuoteData(url, title, content) {
    console.log(url, title, content);
    postQuoteData(url, title, content)
      .then((result) => result.json())
      .catch((error) => error);
    navigate("/");
  }

  function handleClick() {
    navigate("/quotes");
    if (data) {
      handleQuoteData(
        url,
        data.author === null ? "unknown" : data.author,
        data.text
      );
      setClick(true);
      return click
        ? localStorage.setItem("clicked?", "true")
        : localStorage.getItem("clicked?");
    }
  }

  return (
    <FooterCont>
      <Logo>{page}</Logo>

      <QuoteBox>
        <PostTitle>Quote of the Day : </PostTitle>

        {data ? (
          <>
            <Text family="'Antic Didone', serif;">{data.text}</Text>
            <Text family="'Antic Didone', serif;" margin="0rem">
              - {data.author === null ? "unknown" : data.author}
              <Btn
                onClick={() => {
                  handleClick();
                }}>
                {!localStorage.getItem("clicked?") ? (
                  <Img
                    src={qt_add_btn}
                    alt="quote add icon"
                    width="1.3rem"
                    height="1.3rem"
                    margin=" 0.1rem 0.2rem 0 0"
                  />
                ) : (
                  ""
                )}
              </Btn>
            </Text>
          </>
        ) : (
          <Text>No Quote Today Sorry :(</Text>
        )}
      </QuoteBox>
    </FooterCont>
  );
}
