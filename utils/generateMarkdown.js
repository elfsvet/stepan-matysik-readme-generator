// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (!license) ? '' : `https://img.shields.io/badge/license-${license}-9cf`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (!license) ? '' : '* [License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (!license) ? '' : `## License

  ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests
  
  To run tests, use the following command:
 
  ${data.tests}

  ## Questions
  
  - If you have additional questions:

    - you can reach me at my email:  [stepanmatysik@gmail.com](mailto:${data.email})
 
    - find an answer at my [GitHub account](https://github.com/${data.github})
  `;
}

let list = {
  title: 'Test title',
  description: 'dakslfjalsdfjdasl;fjal;fjad;',
  installation: '1 - do that, 2 -do this 3 - do that.',
  usage: 'you can scratch your back with it',
  license: 'MIT',
  contributing: 'Stepan Matysik',
  tests: 'you can install it by yourself',
  github: 'elfsvet',
  email: 'stepanmatysik@gmail.com',
}

module.exports = generateMarkdown;
// console.log(renderLicenseBadge('BSD'));
// console.log(renderLicenseBadge('MIT'));
// console.log(renderLicenseBadge('EPL'));
// console.log(renderLicenseLink('gli'));
// console.log(renderLicenseSection('gli'));
// console.log(generateMarkdown(list));