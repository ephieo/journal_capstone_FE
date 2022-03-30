import React from "react";
import { useState } from "react";

import { postContentData, paramsUrl } from "../utils/fetchy";

import { useLocation, useNavigate } from "react-router-dom";
import Capitalise from "../utils/utils";

import { MainCont } from "../styled-components/reusables";
import {
  Form,
  Label,
  SubmitInput,
  Input,
} from "../styled-components/form_elements";
import Footer from "../components/Footer";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  const url = paramsUrl(`http://127.0.0.1:8000/graphql/`, title, content, "-");
  console.log(url);
  function resolveFormData() {
    postContentData(`${url}`, title, content, "-")
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => error);
    navigate("/");
  }
  return (
    <>
      <MainCont border="red solid 3px">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            resolveFormData(url, title, content, "-");
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
      <Footer
        page={
          location.pathname === "/"
            ? "All Posts"
            : Capitalise(location.pathname)
        }
      />
    </>
  );
}
