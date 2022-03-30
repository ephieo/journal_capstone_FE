import React from "react";
import * as requests from "./utils/fetchy";
import { render, screen } from "@testing-library/react";
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import SavedQuotes from "./pages/savedQoutes";

describe("Home", () => {
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
  beforeEach(() => {
    jest.spyOn(requests, "fetchData").mockResolvedValue(fakePosts);
  });

  it("a request is made with the right parameter", async () => {
    let url = `http://127.0.0.1:8000/posts`;

    await act(async () => {
      render(
        <BrowserRouter>
          <Home url={url} />
        </BrowserRouter>
      );
    });

    expect(requests.fetchData).toHaveBeenCalledWith(url);
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
  });
  it("a quote entry has been rendered", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <SavedQuotes />
        </BrowserRouter>
      );
    });

    screen.getAllByText(/Quotes/i);
    screen.getAllByText(/Quote of the Day/i);
  });
  it("The Add task button is rendered on the screen", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });
    screen.getByAltText("add post button");
  });
});
