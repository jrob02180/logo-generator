const Shape = require("../lib/shapes");

const shape = new Shape("circle", "yellow", "JLR", "purple");

// test for shape class
describe("shape", () => {
  describe("Properties of shape", () => {
    test("Test shape properties", () => {
        expect(shape.shape).toEqual("circle")
    })
    test("Test shapeColor", () => {
        expect(shape.shapeColor).toEqual("yellow")
    })
    test("Test text", () => {
        expect(shape.text).toEqual("JLR")
    })
    test("Test textColor",  () => {
        expect(shape.textColor).toEqual("purple")
    })
  })  
})