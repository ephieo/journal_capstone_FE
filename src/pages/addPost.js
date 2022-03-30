import React from "react";

import { useLocation } from "react-router-dom";
import Capitalise from "../utils/utils";

import { MainCont, SubCont } from "../styled-components/reusables";
import {
  Form,
  Label,
  SubmitInput,
  Input,
} from "../styled-components/form_elements";
import Footer from "../components/Footer";

export default function AddPostForm() {
  let location = useLocation();
  return (
    <>
      <MainCont border="red solid 3px">
        <Form>
          <Label>TITLE</Label>
          <Input />
          <Label>ENTRY</Label>
          <Input height="20vh" />
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
