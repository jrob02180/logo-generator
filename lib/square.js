const Shape = require("./shapes");

class Square extends Shape {
    constructor(shape, colorShape, text, colorText) {
      super(shape, colorShape, text, colorText)
    }
}
module.exports = Square;