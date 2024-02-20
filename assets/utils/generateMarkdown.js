//generate markdown function
function generateMarkdown(data) {

let markdownTemplate =
    
//title and description
    
`# ${data.title}

## Description

${data.description}
`;

//features
if (data.features) {
  markdownTemplate +=
    `
    
## Features

These are the project features:

${data.features}`
};

  //installation
  if (data.installation) {
    markdownTemplate +=
      `

## Installation
    
  These are the required steps for installation:

  ${data.installation}`
  };

  //usage
  if (data.usage) {
    markdownTemplate +=
      `
      
## Usage

  Here are examples of how this can be used:

  ${data.usage}`
  };

  //credits
  if (data.credits) {
    markdownTemplate +=
      `
      
## Credits

  Collaborators or 3rd party assets used:

  ${data.credits}`
  };

//how to contribute
if (data.howTo) {
  markdownTemplate +=
    `
    
## How to contribute

Guidlines for how you can contribute:

${data.howTo}`
};

  //testing
  if (data.tests) {
    markdownTemplate +=
      `
      
## Testing

How to run tests for the application:

  ${data.tests}`
  };

  //questions/contact details
    markdownTemplate +=
      `
      
## Questions
      
  Contact details for questions:

  ${data.email}
  
  Contact Info:

  GitHub: [${data.github}](https://github.com/${data.github})

  Email: [${data.email}](mailto:${data.email})`;
  
  markdownTemplate +=
    `
    
## License

      
  This application has a ${data.license} license.
        
  `;
  return markdownTemplate;
}

module.exports = generateMarkdown;
