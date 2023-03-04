const Shape = require("./shapes")

class Circle extends Shape {
    constructor(shape, colorShape, text, colorText) {
        super(shape, colorShape, text, colorText)
    }
}
module.exports = Circle;