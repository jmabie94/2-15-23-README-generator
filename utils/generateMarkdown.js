// REQUIRE NECESSARY PACKAGE
const licenseBadge = require('./generateLicense');

/* Creates generateMarkdown function using (data) from the questionPrompt and generateLicense utilities, all in order to generate a functional, professional README.md */
function generateMarkdown(data) {
    /* Creates a badge variable so that any selected license will appear with the associated badge image at the top of the README.md, without overcomplicating the data.license and preventing further usage of it in the following template literal */
    const badge = licenseBadge(data.license);
    /* just for fun, console log the final answer from the user */
    if (data.hype == 'Yes') {
        console.log(`When asked if they were ready to see their customized README file, ${data.author} said: ${data.hype}`);
        console.log(`We said: go check out your new README!`);
    } else if (data.hype == 'No') {
        console.log(`When asked if they were ready to see their customized README file, ${data.author} said: ${data.hype}`);
        console.log(`We said: too bad! Rip off the band-aid!`);
    } else {
        console.log(`When asked if they were ready to see their customized README file, ${data.author} couldn't be reached for comment`);
        console.log(`We said: here's your README anyway, meanie.`);
    };

    return `
    
# ${data.title}

${badge}
---
### ${data.description}

### [A deployed version can be viewed here.](${data.URL})

#### Here is the link to the GitHub repository: ${data.repo}
---
## Contents
1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance Criteria](#acceptance%20criteria)
    3. [Media](#media)
    4. [Build](#build)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---
## About

#### ${data.about}
---
## User Story

---
## Acceptance Criteria

---
## Media:
![]()
---
## Build:
---
## Installation:

#### ${data.installation}

#### To clone the repo:

    git clone ${data.clone}
    
---
## License
License used for this project - ${data.license}
* For more information on license types, please reference this website for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing:
To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request
Following a code review, your feature will be merged.
---
## Tests:

#### ${data.test}
---
## Authors and Acknowledgments:

### Primary Author: ${data.author}

### Resources Used: ${data.tech}

---
## Contact Information:
* GitHub Username: ${data.userName}
* Email: ${data.userEmail}

`;
};

module.exports = generateMarkdown;