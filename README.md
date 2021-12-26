# Global Radio Cypress UI QA test

Global Radio Cypress UI test for QA interview.

## Prerequisites

### Installation Overview

Installing Node.js® and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and installing Node and NPM on your system. The whole process (after you have Homebrew installed) should only take you a few minutes.

### Installation Steps

* **Open the Terminal app** and type ```brew update```. This updates Homebrew with a list of the latest version of Node.
* Type ```brew install node.```
* **Sit back and wait.** Homebrew has to download some files and install them. But that’s it.

### Test it!

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed:

* **Test Node.** To see if Node is installed, type ```node -v``` in Terminal. This should print the version number so you’ll see something like this v0.10.31.
* **Test NPM.** To see if NPM is installed, type ```npm -v``` in Terminal. This should print the version number so you’ll see something like this 1.4.27

* Check outdated packages in the project
  ```npm outdated```

* Update Cypress version
  ```npm update cypress```

* Install [Cypress](https://www.cypress.io/), type ```npm install cypress```


## How to run test

```shell
npm test
```

