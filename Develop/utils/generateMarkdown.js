// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

let badge = ""; 

if (license != "None") {
  badge = "[![License](https://shields.io/badge/license-" + license + "-blue)]";
} 
return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT":
      licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt";
      break;
    case "BSD":
      licenseLink = "https://choosealicense.com/licenses/bsd-2-clause/";
      break;
    default:
      licenseLink = ""
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += `Please refer to the following page for license information ${renderLicenseLink(license)}\n`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ['Description', 'Installation', 'Testing', 'License', 'Questions'];

  let markdown = "# " + data.title + "\n";
  
  markdown += renderLicenseBadge(data.license) + "\n";
  
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";



  markdown += "## " + sections[1] + "\n";
  markdown += data.installation + "\n";



  markdown += "## " + sections[2] + "\n";
  markdown += data.testing + "\n";



  markdown += renderLicenseSection(data.license) + "\n";


  markdown += "## " + sections [4] + "\n"
  markdown += "You can reach me via email at " + data.email + " if you have any additional questions. You can also find me on GitHub here https://github.com" + data.username + "\n";

  return markdown;
}

module.exports = generateMarkdown

