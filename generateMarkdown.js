function generateMarkdown(data) {
    return `# ${data.title}
    ## License:
    
    ## Table of Contents
    
    ## Description:
    ${data.Description}
    ## Installation
    ${data.installation}
    ## Usage:
    ${data.Technology}
    ## License:
    ${data.license}`
}