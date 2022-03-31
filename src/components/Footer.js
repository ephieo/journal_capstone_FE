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
    fetchData("https://type.fit/api/quotes", {
      method: "GET",
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(data);

  function quoteRandomiser(data) {
    if (data) {
      let rand = Math.round(Math.random() * 100);
      console.log("rand", rand);
      // return data[rand];
    }
  }

  return (
    <FooterCont>
      <Logo>{page}</Logo>
      <QuoteBox>
        <PostTitle>Quote of the Day</PostTitle>
        {data ? quoteRandomiser(data).author : "hello"}
        {data ? data[2].author : "hello"}
        {/* {data ? (
          <>
            <PostTitle>
              Quote of the Day {quoteRandomiser(data).author}
            </PostTitle>
            <Text family="'Antic Didone', serif;">
              {quoteRandomiser(data).text}
            </Text>
          </>
        ) : (
          <Text>No Quote Today Sorry :(</Text>
        )} */}
      </QuoteBox>
    </FooterCont>
  );
}
