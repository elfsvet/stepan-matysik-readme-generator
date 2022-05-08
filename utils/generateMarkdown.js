// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. To check if no license we used .length because if key license has not respond with checkbox it will be equal to empty array. [].length to get 0. But if there are return a badge link and provide the license
const renderLicenseBadge = license => {
  return (!license.length) ? '' : `![badge for selected license](https://img.shields.io/badge/license-${license}-9cf)`;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string, if there are a license, add a link to the license section
const renderLicenseLink = license => {
  return (!license.length) ? '' : '* [License](#license)';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string, if there is a license create a license section
const renderLicenseSection = license => {
  return (!license.length) ? '' : `## License

  ${license}`;
};

// TODO: Create a function to generate markdown for README
// creates the readme text with use of the function if we have/don't have license in our readme
const generateMarkdown = data => {
  // console.log(data);
  // let's use object destructuring if we have matching keyword and new name. We did it to not use data.keyword.
  const {title, license, description, installation, usage,contributing, tests, github, email} = data;
  return `

  
  # ${title}
  
  ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${installation}

  ## Usage

  ${usage}

  ${renderLicenseSection(license)}

  ## Contributing

  ${contributing}

  ## Tests
  
  To run tests, use the following command:
 
  ${tests}

  ## Questions
  
  - If you have additional questions:

    - you can reach me at my email:  [${email}](mailto:${email})
 
    - find an answer at my [GitHub account](https://github.com/${github})
  `;
};

// use this variable for tests
let testList = {
  title: 'Test title',
  description: 'dakslfjalsdfjdasl;fjal;fjad;',
  installation: '1 - do that, 2 -do this 3 - do that.',
  usage: 'you can scratch your back with it',
  license: 'MIT',
  contributing: 'Stepan Matysik',
  tests: 'you can install it by yourself',
  github: 'elfsvet',
  email: 'stepanmatysik@gmail.com',
};

// to use the function outside of this js file we need to export it.
module.exports = generateMarkdown;
// console.log(renderLicenseBadge('BSD'));
// console.log(renderLicenseBadge('MIT'));
// console.log(renderLicenseBadge('EPL'));
// console.log(renderLicenseLink('gli'));
// console.log(renderLicenseSection('gli'));
// console.log(generateMarkdown(testList));