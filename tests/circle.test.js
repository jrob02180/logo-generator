const Circle = require("../lib/circle");

const circle = new Circle("circle", "orange", "sVg", "black");

describe("circle", () => {
    describe("Properties of circle", () => {
        test("Test shape properties", () => {
            expect(circle.shape).toEqual("circle")
        })
        test("Test shapeColor", () => {
            expect(circle.shapeColor).toEqual("orange")
        })
        test("Test text", () => {
            expect(circle.text).toEqual("sVg")
        })
        test("Test textColor", () => {
            expect(circle.textColor).toEqual("black")
        })
    })
})