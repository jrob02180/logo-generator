const Triangle = require("./shapes");

class Triangle extends Shape {
    constructor(shape, colorShape, text, colorText) {
        super(shape, colorShape, text, colorText)
    }
}
module.exports = Triangle;