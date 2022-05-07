// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  (!license)?'':`https://img.shields.io/badge/license-${license}-9cf`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  (!license)?'':{
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = (!license)?'':{

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge for selected license](https://img.shields.io/badge/license-${data.license}-9cf)
  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests
  
  To run tests, use the following command:
  ${data.tests}
  ## Questions
  
  If you have additional questions:

  - you can reach me at my email:  [stepanmatysik@gmail.com](mailto:${data.email})

  OR
 
  - find an answer at my [GitHub account](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
