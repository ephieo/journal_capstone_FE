import React, { useEffect, useState } from "react";
import { getSinglePost } from "../utils/fetchy";
import { useNavigate, useParams } from "react-router-dom";
import PostBox from "./../components/PostBox";

import { MainCont, SubCont } from "../styled-components/reusables";
export default function PostPage() {
  const [data, setData] = useState(null);

  let { id } = useParams();
  console.log({ id });
  let navigate = useNavigate();

  useEffect(() => {
    resolvePostData();
    console.log("data", data);
  }, []);

  const url = `http://127.0.0.1:8000/graphql`;

  function resolvePostData() {
    getSinglePost(url, { id })
      .then((result) => setData(result))
      .catch((error) => error);
  }

  return (
    <MainCont>
      <SubCont width="50vw" border="soldi red 3px">
        <div>
          {data ? (
            <>
              <PostBox
                title={data.data.post.title}
                content={data.data.post.content}
                date={data.data.post.date}
              />
            </>
          ) : (
            "no content"
          )}
        </div>
      </SubCont>
    </MainCont>
  );
}
