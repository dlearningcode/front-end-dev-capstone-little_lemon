import { fetchAPI, removeTime } from "../../scripts/masterapi";

describe("masterapi", () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test("fetchAPI should generate new times if none are stored", async () => {
    const reservationDate = "2024-03-13";
    const times = await fetchAPI(reservationDate);

    expect(times).toBeInstanceOf(Array);
    expect(times.length).toBeGreaterThan(0);
    expect(JSON.parse(localStorage.getItem(reservationDate))).toEqual(times);
  });

  test("fetchAPI should return stored times from local storage", () => {
    const reservationDate = "2022-12-31";
    const storedTimes = ["17:00", "19:00", "21:00"];
    localStorage.setItem(reservationDate, JSON.stringify(storedTimes));

    const times = fetchAPI(reservationDate);

    expect(times).toEqual(storedTimes);
  });

  test("removeTime should remove a time from stored times", async () => {
    const reservationDate = "2024-03-31";
    const reservationTime = "20:00";
    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    localStorage.setItem(reservationDate, JSON.stringify(initialTimes));

    await removeTime(reservationDate, reservationTime);

    const updatedTimes = JSON.parse(localStorage.getItem(reservationDate));
    expect(updatedTimes).toEqual(
      initialTimes.filter((time) => time !== reservationTime)
    );
  });
});
