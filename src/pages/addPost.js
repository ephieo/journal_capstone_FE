import React from "react";
import { useState } from "react";

import { postContentData } from "../utils/fetchy";

import { useNavigate } from "react-router-dom";

import { MainCont } from "../styled-components/reusables";
import {
  Form,
  Label,
  SubmitInput,
  Input,
} from "../styled-components/form_elements";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let navigate = useNavigate();

  const url = `http://127.0.0.1:8000/graphql`;

  function resolveFormData() {
    console.log(url, title, content);
    postContentData(url, title, content)
      .then((result) => result.json())
      .catch((error) => error);
    navigate("/");
  }
  return (
    <>
      <MainCont border="red solid 3px">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            resolveFormData(url, title, content);
          }}>
          <Label htmlFor="title">TITLE</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Label htmlFor="content">content</Label>
          <Input
            height="20vh"
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <SubmitInput type="submit" value="SUBMIT" />
        </Form>
      </MainCont>
    </>
  );
}
