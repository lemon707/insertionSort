var insertionSortFunction = require("../insertionsort.js")
describe("A suite", function() {
  
  it("keeps a sorted array sorted", function() {
    expect(insertionSortFunction([1,2])).toEqual([1,2]);
  });

  it("sorts an unsorted list of two", function() {
    expect(insertionSortFunction([2,1])).toEqual([1,2]);
  });

  it("sorts a partially sorted list of three", function() {
    expect(insertionSortFunction([1,3,2])).toEqual([1,2,3]);
  });

  it("sorts a completely unsorted list of positive numbers", function() {
    expect(insertionSortFunction([22, 11, 99, 88, 9, 7, 42])).toEqual([7, 9, 11, 22, 42, 88, 99]);
  });

  it("sorts a completely unsorted list of a mix of negative and positive numbers", function() {
    expect(insertionSortFunction([0, -1, 4, 66, 34, -2])).toEqual([-2, -1, 0, 4, 34, 66]);
  });
});
