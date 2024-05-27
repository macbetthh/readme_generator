// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
    'None': ''
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': ''
  };
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ✨

${renderLicenseBadge(data.license)}

## Description 📝
${data.description ? data.description : ''}

## Table of Contents 📚
${data.installation ? '- [Installation](#installation)' : ''}
${data.usage ? '- [Usage](#usage)' : ''}
${data.license ? '- [License](#license)' : ''}
${data.contributing ? '- [Contributing](#contributing)' : ''}
${data.tests ? '- [Tests](#tests)' : ''}
${data.credits ? '- [Credits](#credits)' : ''}
${data.email || data.github ? '- [Questions](#questions)' : ''}

${data.installation ? `## Installation 🔧\n${data.installation}` : ''}

${data.usage ? `## Usage 💻\n${data.usage}` : ''}

${data.ssUrl && data.ssAlt ? `## Screenshot 📸\n![${data.ssAlt}](${data.ssUrl})\n` : ''}

${renderLicenseSection(data.license)}

${data.contributing ? `## Contributing 🤝\n${data.contributing}` : ''}

${data.tests ? `## Tests 🧪\n${data.tests}` : ''}

${data.credits ? `## Credits 🌟\n${data.credits.split('", "').map(credit => {
  const creditArray = credit.replace(/"/g, '').split(', ');
  if (creditArray.length === 2) {
    const [creditName, creditUrl] = creditArray;
    return `- [${creditName.trim()}](${creditUrl.trim()})`;
  } else {
    return `- ${creditArray[0].trim()}`;
  }
}).join('\n')}` : ''}

${data.email || data.github ? `## Questions ❓\nIf you have any questions, you can contact me at ${data.email ? `[${data.email}](mailto:${data.email})` : ''}${data.email && data.github ? ' or ' : ''}${data.github ? `[${data.github}](https://github.com/${data.github})` : ''}.` : ''}

---

_This README was generated with ❤️ and a touch of magic by ReadMe Wizard._ 🪄
`;
}

module.exports = generateMarkdown;




