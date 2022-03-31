import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchy";

import { FooterCont, Logo } from "../styled-components/reusables";
import {
  QuoteBox,
  PostTitle,
  Text,
} from "./../styled-components/home_elements";

export default function Footer({ page }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("https://type.fit/api/quotes", {})
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
            {/* {data ?? console.log(quoteRandomiser(data.allPosts).author)} */}
            <Text family="'Antic Didone', serif;">
              {/* {quoteRandomiser(data.data.allPosts).text}-{" "}
              {quoteRandomiser(data.data.allPosts).author} */}
            </Text>
            <Text family="'Antic Didone', serif;" margin="01rem">
              {/* - {quoteRandomiser(data).author} */}
            </Text>
          </>
        ) : (
          <Text>No Quote Today Sorry :(</Text>
        )}
      </QuoteBox>
    </FooterCont>
  );
}
