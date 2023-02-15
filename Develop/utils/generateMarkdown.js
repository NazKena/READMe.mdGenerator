// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license !=="NO LICENSE"){
  return`<img src="https://img.shields.io/badge/LICENSE-${license}-blue.svg">`
  
}else{return "";
}
}


function renderLicenseLink(license) {
if(license !=="NO LICENSE"){
  return`* [License](#license)`
  
}else{return "";
}
}

// TODO: Create a function that returns the license link


// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArray [0])
  { return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`}
  else if  (license === licenseArray [1])
  { return `[${licenseArray[1]}](https://opensource.org/licenses/BSD-2-Clause)`}
  else if  (license === licenseArray [2])
  { return `[${licenseArray[2]}](https://opensource.org/licenses/BSD-3-Clause)`}
  else if  (license === licenseArray [3])
  { return `[${licenseArray[3]}](https://opensource.org/licenses/MIT)`}
  else { return "" }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
