# Assignment run and Setup Details:
### Environment Setup
Clone the repository to your local computer

git clone https://github.com/Arafat-Anik/saucedemoAutomation.git

Use the package manager npm to install dependencies:

npm install


### Go to the VS Code terminal, then execute the following commands,
To initialize the node module: 

npm init -y

To add the CLI package: 

npm i --save-dev @wdio/cli

To add a full WebdriverIO setup:

npm init wdio@latest


## To run suites for sequential way, execute: 

npm run allspecsRun

## Run Codes
To run specs for separately, execute: 

npm run test

## Allure Report Setup

npm install @wdio/allure-reporter --save-dev

## In wdio.config.js -> Run Codes
To run specs for separately, execute: 

npm run testthen

            reporters: [['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
         }]],

## Allure Commandline

npm i allure-commandline

To run specs, execute: 

npm run test

To run suites, execute: 

npm run runspecFiles

## To get report, execute following command: 

npm run getReport


## Screenshot
![Allure Report](<Allure report.png>)