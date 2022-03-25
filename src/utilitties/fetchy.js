export const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => error);
};

export const postEntryData = (url, title, content, imgLink) => {
  return fetchData(url, {
    method: "POST",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify({
      title: title,
      content: content,
      img_link: imgLink,
    }),
  })
    .then((result) => result.json())
    .catch((error) => error);
};
export const postQuoteData = (url, title, content) => {
  return fetchData(url, {
    method: "POST",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  })
    .then((result) => result.json())
    .catch((error) => error);
};
