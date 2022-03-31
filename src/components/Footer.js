import React, { useEffect, useState } from "react";
// import { getAllPostData } from "../utils/fetchy";

import { FooterCont, Logo } from "../styled-components/reusables";
import {
  QuoteBox,
  PostTitle,
  Text,
} from "./../styled-components/home_elements";

export default function Footer({ page }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes", {
      method: "GET",
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  function quoteRandomiser(data) {
    if (data) {
      let rand = Math.round(Math.random() * 100);

      return data[rand];
    }
  }

  return (
    <FooterCont>
      <Logo>{page}</Logo>
      <QuoteBox>
        <PostTitle>Quote of the Day : </PostTitle>
        {data ? (
          <>
            <Text family="'Antic Didone', serif;">
              {quoteRandomiser(data).text}- {quoteRandomiser(data).author}
            </Text>
            <Text family="'Antic Didone', serif;" margin="01rem">
              - {quoteRandomiser(data).author}
            </Text>
          </>
        ) : (
          <Text>No Quote Today Sorry :(</Text>
        )}
      </QuoteBox>
    </FooterCont>
  );
}
