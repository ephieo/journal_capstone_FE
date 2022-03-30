export const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => error);
};

export const postContentData = (url, title, content) => {
  // const query = `mutation {
  //     addPost(title:title,content:content){
  //        post{title,content}
  //     }`;

  // console.log("query===", query);

  return fetchData(url, {
    method: "POST",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify({
      query: `mutation {
      addPost(title:title,content:content){
         post{title,content}
      }`,
      variables: { title, content },

      // title: title,
      // content: content,
    }),
  })
    .then((result) => result.json())
    .catch((error) => error);
};
export const postQuoteData = (url, title, content) => {
  let query = `query{
 
      allPosts{
       id
       content 
        date
      }
      
    }`;

  return fetchData(url, {
    method: "POST",
    mode: "no-cors",
    headers: { Accept: "application/json", "Content-Type": "application/JSON" },
    body: JSON.stringify({
      query,
      // title: title,
      // content: content,
    }),
  })
    .then((result) => result.json())
    .catch((error) => error);
};

export function paramsUrl(url, title, content) {
  const newUrl = `${url}?title=${title}&content=${content}`;
  return newUrl;
}
