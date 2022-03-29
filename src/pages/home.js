import React from "react";
import { useState, useEffect } from "react";
import { MainCont, SubCont } from "./../styled-components/reusables";
import { fetchData } from "../utilitties/fetchy";
import PostsManager from "../components/PostsManager";
import PostTitleBox from "../components/PostTitleBox";
import { Scrollbars } from "react-custom-scrollbars";
import { newestDate, oldestDate } from "../utilitties/sortDate";
export default function Home() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    resolveData();
  }, []);

  function setTaskOrder() {
    // if (toggle && data) {
    //   return newestDate(data);
    // } else if (data && !toggle) {
    //   console.log("its false");
    //   return oldestDate(data);
    // }
    return toggle && data ? newestDate(data) : oldestDate(data);
  }

  const resolveData = () => {
    fetchData("http://127.0.0.1:8000/posts")
      .then((result) => setData(result))
      .catch((error) => error);
  };
  return (
    <MainCont>
      <PostsManager toggle={toggle} setToggle={setToggle} />
      <Scrollbars style={{ width: "70vw", height: "60vh" }}>
        <SubCont
          flex_dir="row"
          height="60vh"
          width="70vw"
          border="dashed #B5C2BE 3px"
          overflow="scroll">
          {data ? console.log("oldest date ", oldestDate(data)) : "hello"}
          {data ? (
            setTaskOrder().map((e) => {
              return (
                <SubCont key={e.id}>
                  <PostTitleBox title={e.title} date={e.date} />
                </SubCont>
              );
            })
          ) : (
            <h2>"no data yet..."</h2>
          )}
        </SubCont>
      </Scrollbars>
    </MainCont>
  );
}
