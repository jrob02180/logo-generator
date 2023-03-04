{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <circle cx="150" cy="100" r="80" fill="green"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

class Shape {
    constructor(shape, colorShape, text, colorText) {
        this.shape = shape;
        this.colorShape = colorShape;
        this.text = text;
        this.colorText = colorText;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <${this.shape} cx="150" cy="100" r="80" fill="${this.colorShape}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
      
      </svg>`
    }
}
module.exports = Shape; 