import React from "react";
import { SubCont, Img, Btn } from "../styled-components/reusables";
import { PostTitle, PostDate } from "../styled-components/home_elements";
import blog_icon from "../images/blog-icon.svg";
import bin_icon from "./../images/bin.svg";
import { deleteContentData } from "../utils/fetchy";
import { useNavigate } from "react-router-dom";

export default function PostTitleBox({ title, date, id }) {
  let navigate = useNavigate();
  const url = `http://127.0.0.1:8000/graphql`;
  function resolveDeleteData() {
    deleteContentData(url, id)
      .then((result) => result.json())
      .catch((error) => error);
    navigate("/");
  }
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
        overflow="hidden"
        justify="center"
        align_items="flex-start">
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <Btn
          onClick={(e) => {
            e.preventDefault();
            resolveDeleteData();
          }}>
          <Img src={bin_icon} alt="delete icon" width="1.3vw" />
        </Btn>
      </SubCont>
    </SubCont>
  );
}
