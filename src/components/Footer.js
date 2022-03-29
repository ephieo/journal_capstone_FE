import React from "react";

import { FooterCont, Logo } from "../styled-components/reusables";
import { QuoteBox } from "./../styled-components/home_elements";

export default function Footer({ page }) {
  return (
    <FooterCont>
      <Logo>{page}</Logo>
      <QuoteBox>
        <h3>What is Lorem Ipsum?</h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </QuoteBox>
    </FooterCont>
  );
}
