const Square = require("../lib/square");

const square = new Square("square", "blue", "SVG", "white");

describe("square", () => {
    describe("Properties of square", () => {
        test("Test shape properties", () => {
            expect(square.shape).toEqual("square")
        })
    })
    test("Test shapeColor", () => {
        expect(square.shapeColor).toEqual("blue")
    })
    test("Test text", () => {
        expect(square.text).toEqual("SVG")
    })
    test("Test textColor", () => {
        expect(square.textColor).toEqual("white")
    })
})