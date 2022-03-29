import React from "react";

import { FooterCont, Logo } from "../styled-components/reusables";
import {
  QuoteBox,
  PostTitle,
  Text,
} from "./../styled-components/home_elements";

export default function Footer({ page }) {
  return (
    <FooterCont>
      <Logo>{page}</Logo>
      <QuoteBox>
        <PostTitle>Quote of the Day</PostTitle>
        <Text family="'Antic Didone', serif;">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
      </QuoteBox>
    </FooterCont>
  );
}
