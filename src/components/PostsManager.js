import React from "react";
import { PostToggle, PostBar } from "../styled-components/home_elements";
import { Img } from "../styled-components/reusables";
import up_btn from "../images/toggle-up-btn.svg";
import down_btn from "../images/toggle-down-btn.svg";
import add_post_btn from "../images/add-post-icon.svg";
import ToggleButton from "./ToggleButton";

export default function PostsManager({ toggle, setToggle }) {
  return (
    <PostBar>
      <Img src={add_post_btn} width="12vw" alt="add post button" />
      <PostToggle width="9vw">
        <ToggleButton
          toggle={toggle}
          setToggle={setToggle}
          btnImg={up_btn}
          clickFn={() => {
            if (!toggle) {
              setToggle(true);
            }
          }}
        />
        <ToggleButton
          toggle={toggle}
          setToggle={setToggle}
          btnImg={down_btn}
          clickFn={() => {
            if (toggle) {
              setToggle(false);
            }
          }}
        />
      </PostToggle>
    </PostBar>
  );
}
