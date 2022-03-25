import React from "react";
import { useState, useEffect } from "react";
import { MainCont } from "./../styled-components/reusables";
import { fetchData } from "../utilitties/fetchy";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    resolveData();
  }, []);

  const resolveData = () => {
    fetchData("http://127.0.0.1:8000/posts")
      .then((result) => setData(result))
      .catch((error) => error);
  };
  return (
    <MainCont>
      {data ? (
        data.map((e) => {
          return (
            <div key={e.id}>
              <h2>Entry title: {e.title}</h2>
              <p>Content: {e.content}</p>
            </div>
          );
        })
      ) : (
        <h2>"no data yet..."</h2>
      )}
    </MainCont>
  );
}
