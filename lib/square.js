const Shape = require("./shapes");

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor) {
      super(shape, shapeColor, text, textColor)
    }
}
module.exports = Square;