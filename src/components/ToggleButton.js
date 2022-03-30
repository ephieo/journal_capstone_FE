import React from "react";
import { Img } from "../styled-components/reusables";
import { ToggleBtn } from "../styled-components/home_elements";

export default function ToggleButton({ clickFn, btnImg }) {
  return (
    <>
      <ToggleBtn onClick={clickFn}>
        <Img src={btnImg} width="1.2rem" />
      </ToggleBtn>
    </>
  );
}
