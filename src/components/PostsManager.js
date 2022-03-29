import React from "react";
import { PostToggle, PostBar } from "../styled-components/home_elements";
import { Img } from "../styled-components/reusables";
import up_btn from "../images/toggle-up-btn.svg";
import down_btn from "../images/toggle-down-btn.svg";
import add_post_btn from "../images/add-post-icon.svg";

export default function PostsManager({ toggle, setToggle }) {
  return (
    <PostBar>
      <Img src={add_post_btn} width="12vw" />
      <PostToggle width="10vw">
        <button
          onClick={() => {
            if (!toggle) {
              setToggle(true);
            }
          }}>
          <Img src={up_btn} width="1.5rem" />
        </button>
        <button
          onClick={() => {
            if (toggle) {
              setToggle(false);
            }
          }}>
          <Img src={down_btn} width="1.5rem" />
        </button>
      </PostToggle>
    </PostBar>
  );
}
