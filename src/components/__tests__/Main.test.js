import { updateTimes, initializeTimes } from "../Main";

describe("Main component", () => {
  test("should update times correctly", () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {
      type: "DATE_CHANGE",
      payload: ["17:30", "18:30", "19:30", "20:30", "21:30", "22:30"],
    };

    // Assert that the times are updated correctly
    expect(updateTimes(state, action)).toEqual([
      "17:30",
      "18:30",
      "19:30",
      "20:30",
      "21:30",
      "22:30",
    ]);
  });
});
//   test("should initialize times correctly", () => {
//     // Assert that the times are initialized correctly
//     expect(initializeTimes()).toEqual([
//       "17:00",
//       "18:00",
//       "19:00",
//       "20:00",
//       "21:00",
//       "22:00",
//     ]);
//   });
// });
