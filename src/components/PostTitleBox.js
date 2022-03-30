import React from "react";
import { SubCont, Img } from "../styled-components/reusables";
import { PostTitle, PostDate } from "../styled-components/home_elements";
import blog_icon from "../images/blog-icon.svg";

export default function PostTitleBox({ title, date }) {
  return (
    <SubCont
      width="25vw"
      height="15vh"
      margin="2rem"
      flex_dir="row"
      border="solid #B5C2BE 3px">
      <Img src={blog_icon} width="5vw" />
      <SubCont
        width="12vw"
        height="11vh"
        overflow="visible"
        justify="center"
        align_items="flex-start">
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
      </SubCont>
    </SubCont>
  );
}
