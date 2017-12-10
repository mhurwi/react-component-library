import { getWidthAsPercentOfTotalWidth } from "./percentUtils";

test("should return correct number", () => {
  const width = getWidthAsPercentOfTotalWidth(50, 500);
  expect(width).toEqual(250);
});
