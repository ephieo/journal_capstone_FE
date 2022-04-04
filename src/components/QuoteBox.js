import React from "react";

import {
  QuoteTitleCont,
  QuoteTextCont,
} from "../styled-components/quote_elements";

export default function QuoteBox({ title, content }) {
  return (
    <QuoteTitleCont>
      <QuoteTextCont>{content}</QuoteTextCont>
      {title}
    </QuoteTitleCont>
  );
}
