const inquirer = require('inquirer');
const jest = require('jest');
const { writeFile } = require('fs/promises');

class Menu {
    constructor() {
        this.title = '';
    }

    run() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text for the logo. (Must not be more than 2 characters.)'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a text color or hexadecimal number.'
            },
            {
                type: 'input',
                name: 'shape',
                message: 'Select a shape for the logo.',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a shape color or hexadecimal number.'
            }
        ])
            .then((answers) => {
                const generateSVG = generateLogo(answers);
            
                fs.writeFile('logo.svg', generateSVG, (err) =>
                  err ? console.log(err) : console.log('Generated logo.svg.')
                );
        })
    }
}

const generateLogo = 

// function writeFile() {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//     <circle cx="150" cy="100" r="80" fill="green" />
  
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
//   </svg>`
// }
