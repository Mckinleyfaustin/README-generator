
function generateMarkdown(data) {
    return `
    
    # ${data.Title}

    ## Description:
    ${data.BriefDescription}

    
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)



    ## Installation
    ${data.ToInstall}

    ## Usage:
    ${data.TechnologiesUsed}
    
    ## License:
    ${data.License}
    
    ## Contributing:
    ${data.Contributing}
    
    ## Tests:
    ${data.Tests}

    ## Questions:
    ${data.Questions}
    `
}

module.exports = generateMarkdown;