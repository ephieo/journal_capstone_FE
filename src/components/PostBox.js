import React from "react";
import {
  BinDate,
  PostCont,
  Title,
  Img,
  Btn,
} from "../styled-components/reusables";
import { useNavigate, useParams } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import { deleteContentData } from "../utils/fetchy";
import bin from "./../images/bin.svg";

export default function PostBox({ title, content, date }) {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log({ id }.id);

  const url = `http://127.0.0.1:8000/graphql`;

  function resolveDeleteData() {
    deleteContentData(url, { id }.id)
      .then((result) => result.json())
      .catch((error) => error);
    navigate("/");
  }
  return (
    <>
      <Title font_size="30px">{title}</Title>
      <PostCont>
        <ReadMoreReact text={content} readMoreText={"..."} />

        <BinDate>
          <Btn
            onClick={(e) => {
              e.preventDefault();
              resolveDeleteData();
            }}>
            <Img
              src={bin}
              alt="bin icon"
              width="2rem"
              height="1.7rem"
              margin="0"
            />
          </Btn>
          {date}
        </BinDate>
      </PostCont>
    </>
  );
}
