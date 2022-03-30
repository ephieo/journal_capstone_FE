import capitalise from "./utils/utils";
import { newestDate, oldestDate } from "./utils/sortDate";

describe("Utils", () => {
  it("capitalises the first letter of the pathname", () => {
    let path = "/homepage";
    expect(capitalise(path)).toBe("Homepage");
  });

  it("sorts dates from the newest to the oldest or oldest to newest", () => {
    let dateArr = [
      { id: 3, title: "migwo", date: "2022-03-17", content: "SOME STRING" },
      {
        id: 8,
        title: "The Movies",
        date: "2022-03-17",
        content: "I went to watch a film it was great !!!",
      },
    ];
    let result_1 = [
      { id: 3, title: "migwo", date: "2022-03-17", content: "SOME STRING" },
      {
        id: 8,
        title: "The Movies",
        date: "2022-03-18",
        content: "I went to watch a film it was great !!!",
      },
    ];
    let result_2 = [
      { id: 3, title: "migwo", date: "2022-03-17", content: "SOME STRING" },
      {
        id: 8,
        title: "The Movies",
        date: "2022-03-18",
        content: "I went to watch a film it was great !!!",
      },
    ];

    expect(newestDate(dateArr)[0].id).toBe(result_1[0].id);
    expect(oldestDate(dateArr)[0].id).toBe(result_2[0].id);
  });
});
