const Triangle = require("../lib/triangle");

const triangle = new Triangle("triangle", "blue", "SvG", "pink");

// test for triangle class
describe("triangle", () => {
    describe("Properties of triangle", () => {
        test("Test shape properties", () => {
            expect(triangle.shape).toEqual("triangle");
        })
        test("Test shapeColor", () => {
            expect(triangle.shapeColor).toEqual("blue");
        })
        test("Test text", () => {
            expect(triangle.text).toEqual("SvG");
        })
        test("Test textColor", () => {
            expect(triangle.textColor).toEqual("pink")
        })
    })
})