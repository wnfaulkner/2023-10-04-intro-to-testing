//INTRO TO TESTING

// write a function isPositive() that takes a single argument: a number
// The function should return true if the number is positive,
// and false if the number is negative

function isPositive(

)

test("It should return true when passed a positive number", () => {
    expect(isPositive(3)).toBe(true);
  });
  
  test("It should return false when passed a negative number", () => {
    expect(isPositive(-3)).toBe(false);
  });