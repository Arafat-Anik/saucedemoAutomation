
# Assignment Setup and Run
### Environment Setup
Clone the repository to your local computer
```
git clone https://github.com/Arafat-Anik/saucedemoAutomation.git
```
Use the package manager `npm` to install dependencies:
```
npm install
```

### Go to the VS Code terminal, then execute the following commands,
To initialize the node module: 
```
npm init -y
```
To add the CLI package: 
```
npm i --save-dev @wdio/cli
```
To add a full WebdriverIO setup:
```
npm init wdio@latest
```
## Run Code
To run suites for sequential way, execute: 
```
npm run allspecsRun
```
To run specs for separately, execute: 
```
npm run test
```
## Allure Report Setup
```
npm install @wdio/allure-reporter --save-dev
```
## In wdio.config.js -> Add these code in reporter:
```
            reporters: [['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
         }]],
```
## Allure Commandline
```
npm i allure-commandline
```
To run specs, execute: 
```
npm run test
```
To run All suites, execute: 
```
npm run allspecsRun
```
## To get report, execute following command: 
```
npm run getReport
```
## Note: 
In wdio.config.js, commented on the aftersuits functions, because after run the webdriverIO `version 9.2.2`, In this version, there is some issues in the browser.quit() function.

## Screenshot
![Allure Report](<Allure report.png>)

## A summary of this project at a glance
1. Try to Login to this [Sauce Demo](https://www.saucedemo.com/) site with locked_out_user
    - login with user name: `locked_out_user` and Password: `secret_sauce`
    - Successfully executing the error message with the given user ID and password.

2. Try to Login to this [Sauce Demo](https://www.saucedemo.com/) site with user: `standard_user` and Password: `secret_sauce`
    - standard_user will login easily.
    - click the hamburger menu
    - click to reset App State
    - close the hamburger menu
    - add three items to the cart
    - navigate to the final checkout page
    - verify all the product's name that was added previous in the inventory
    - verify the total price with tax and without tax.
    - complete Checkout with Successful Message
    - click the hamburger menu
    - rest the App State
    - logout

3. Try to Login [Sauce Demo](https://www.saucedemo.com/) with user: `performance_glitch_user` and and Password: `secret_sauce`
    - login with performance_glitch_user
    - click the hamburger menu
    - reset App State
    - reload the site
    - close the hamburger menu
    - filter product by name (Z to A)
    - add first item to the cart
    - navigate to the final checkout page
    - verify the product's name in the inventoy
    - verify the total price with tax and without Tax
    - complete Checkout with Success Message
    - click the hamburger menu
    - rest the App State
    - logout