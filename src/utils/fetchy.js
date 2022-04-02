export const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => error);
};

export const getAllPostData = (url) => {
  const query = `query{
	
    allPosts{
      
      id
      title
      content 
      date
      
    } 
    
  }`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log("ERRROR", error));
};

export const getAllQuoteData = (url) => {
  const query = `query{
	
    allQuotes{
      
      id
      title
      content 
      date
      
    } 
    
  }`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log("ERRROR", error));
};
export const getSinglePost = (url, id) => {
  const query = `query{
    post(id: ${id.id}){
      id
      title
      content
      date
    }
  }`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log("ERRROR", error));
};
export const postContentData = (url, title, content) => {
  const query = `mutation addMutation{
    addPost(title: "${title}",content: "${content}"){
      post{
        title: title,
        content: content
      }
    }
  }`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((result) => console.log("RESULT->", result))
    .catch((error) => console.log("ERRROR", error));
};
export const postQuoteData = (url, title, content) => {
  const query = `mutation addMutation{
      addQuote(title: "${title}",content: "${content}"){
        quote{
          title: title,
          content: content
        }
      }
    }`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((result) => console.log("RESULT->", result))
    .catch((error) => console.log("ERRROR", error));
};

export const deleteContentData = (url, id) => {
  const query = `mutation deleteMutation {
    deletePost(id:"${id}"){
      post{id: id}
    }
  }`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      // variables: { id },
    }),
  })
    .then((result) => result.json())
    .catch((error) => error);
};

export function paramsUrl(url, title, content) {
  const newUrl = `${url}?title=${title}&content=${content}`;
  return newUrl;
}
