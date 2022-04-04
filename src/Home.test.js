import React from "react";
import * as requests from "./utils/fetchy";
import { render, screen, act } from "@testing-library/react";
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import localStorage from "./utils/localStorageMock";

describe("Home", () => {
  let url = `http://127.0.0.1:8000/graphql`;
  const fakePosts = [
    {
      id: 7,
      title: "The Oscars",
      date: "2022-03-28",
      content: "Will Smith slapped Chris Rock ! Wowzers :o",
    },
    {
      id: 8,
      title: "The Movies",
      date: "2022-03-17",
      content: "I went to watch a film it was great !!!",
    },
  ];
  let storage;
  beforeEach(() => {
    storage = localStorage;
  });

  afterEach(() => {
    window.localStorage = storage;
  });

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: { allPosts: fakePosts } }),
    })
  );
  beforeEach(() => {
    fetch.mockClear();
    jest.spyOn(requests, "fetchData").mockResolvedValue(fakePosts);
    jest.spyOn(requests, "getAllPostData").mockResolvedValue(fakePosts);
    jest.spyOn(requests, "getAllQuoteData").mockResolvedValue(fakePosts);
    JSON.parse = jest.fn().mockImplementationOnce(() => {});
    JSON.stringify = jest.fn().mockImplementationOnce(() => {});
  });

  it("a request is made with the right parameter", async () => {
    render(<Home url={url} />);

    expect(requests.getAllPostData).toHaveBeenCalledWith(url);
  });

  it("a journal entry has been rendered", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    screen.getByText(/The Oscars/i);
    screen.getAllByText(/2022-03-28/i);
    screen.getAllByText(/All Posts/i);
    screen.getAllByText(/Quote of the Day/i);
    expect(localStorage.getItem.mock.calls.length).toBe(1);
  });

  it("The Add task button is rendered on the screen", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });
    screen.getByAllText("add post button");
  });
});
