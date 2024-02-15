const {addnum} =require("../arithmetica")
test('2+3 is equal to 5',() => {
    expect(addnum(2,3)).toBe(5);
}) 
test('case2',() => {
    expect(addnum(3888,39999)).toBe(43887);
}) 
test('case3',() => {
    expect(addnum(10000000009,19999999990)).toBe(29999999999);
}) 
