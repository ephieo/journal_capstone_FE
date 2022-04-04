import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSinglePost } from "../utils/fetchy";

import PostBox from "./../components/PostBox";
import { MainCont, SubCont } from "../styled-components/reusables";

export default function PostPage() {
  const [data, setData] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    resolvePostData();
    // eslint-disable-next-line
  }, []);

  const url = `http://127.0.0.1:8000/graphql`;

  function resolvePostData() {
    getSinglePost(url, { id })
      .then((result) => setData(result.data.post))
      .catch((error) => error);
  }

  return (
    <MainCont>
      <SubCont width="50vw" border="soldi red 3px">
        <div>
          {data ? (
            <>
              <PostBox
                title={data.title}
                content={data.content}
                date={data.date}
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
