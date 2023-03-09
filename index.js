const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

// prompts for user questions
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color or hexadecimal number.",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo.",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color or hexadecimal number.",
    },
  ])
  // function to write file based on user's choices
  .then((data) => {
    if (data.shape === "circle") {
      fs.writeFileSync(
        "./dist/logo.svg",
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}"/>
              
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
              
              </svg>`
      );
    } else if (data.shape === "square") {
      fs.writeFileSync(
        "./dist/logo.svg",
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <rect x="75" y="25" width="150" height="150" fill="${data.shapeColor}"/>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
          
          </svg>`
      );
    } else if (data.shape === "triangle") {
      fs.writeFileSync(
        "./dist/logo.svg",
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <polygon points="150, 18 244, 182 56, 182"" fill="${data.shapeColor}"/>
          
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
          
          </svg>`
      );
    }
    console.log("Generated logo.svg");
  });
