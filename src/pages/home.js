import React from "react";
import { useState, useEffect } from "react";

import { getAllPostData } from "../utils/fetchy";
import { newestDate, oldestDate } from "../utils/sortDate";
import { capitalise } from "../utils/utils";

import { MainCont, SubCont } from "./../styled-components/reusables";
import PostsManager from "../components/PostsManager";
import PostTitleBox from "../components/PostTitleBox";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    resolveData();
  }, []);

  function setTaskOrder() {
    return toggle && data ? newestDate(data) : oldestDate(data);
  }

  const resolveData = () => {
    getAllPostData("http://127.0.0.1:8000/graphql")
      .then((result) => setData(result.data.allPosts))
      .catch((error) => error);
  };

  let location = useLocation();

  return (
    <MainCont>
      <PostsManager toggle={toggle} setToggle={setToggle} />
      <SubCont
        flex_dir="row"
        height="50vh"
        width="70vw"
        border="dashed #B5C2BE 3px"
        overflow="scroll">
        {data ? (
          setTaskOrder().map((e) => {
            return (
              <SubCont key={e.id}>
                <PostTitleBox title={e.title} date={e.date} id={e.id} />
              </SubCont>
            );
          })
        ) : (
          <h2>"no data yet..."</h2>
        )}
      </SubCont>
      <Footer
        page={
          location.pathname === "/"
            ? "All Posts"
            : capitalise(location.pathname)
        }
      />
    </MainCont>
  );
}
