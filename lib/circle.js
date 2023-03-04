const Shape = require("./shapes")

class Circle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }
}
module.exports = Circle;