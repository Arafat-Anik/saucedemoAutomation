const performanceGlitchUserAction = require ("../pageobjects/performanceGlitchUser/performanceGlitchUserAction.js")

const pguname = "performance_glitch_user";
var password = "secret_sauce";
const count = 1;
var firstName = "arafat";
var lastName = "anik";
var postalCode = "1200";
var TaxPercentage = 0.08;

var productArray = [
    'Test.allTheThings() T-Shirt (Red)'   
];

describe("Performance glitch User journey", () => {
    it("Should performance glitch User sucessfully Login", async () => {
        await performanceGlitchUserAction.clickOnpguUserName(pguname);
        await performanceGlitchUserAction.clickOnpguPassword(password);
        await browser.pause(2000);
        await performanceGlitchUserAction.clickOnpguLoginButton();
    }) 

    it("Performance Glitch User Menubar open close", async () => {
        await performanceGlitchUserAction.clickHamburgerOpenMenu();
        await performanceGlitchUserAction.clickOnResetAppState();
        await browser.pause(2000);
        await performanceGlitchUserAction.clickOnHamburgerCloseMenu();
        await browser.pause(2000);
        await browser.refresh();      // Page refresh
        await browser.pause(2000);

    })

    it("Performance Glitch User Add to cart Journey", async () => {
      //  await performanceGlitchUserAction.clickOnNameFilterField();
        await performanceGlitchUserAction.clicktoOpenNameFilter();
        await browser.pause(2000);
        await performanceGlitchUserAction.selectNamefromFilter();
        await browser.pause(3000);
        await performanceGlitchUserAction.clickAddtoCartFromList(count);
        await browser.pause(2000);
        await performanceGlitchUserAction.clickOnAddtoCartButton();
        await browser.pause(2000);
        await performanceGlitchUserAction.clickOnCheckout();
        await performanceGlitchUserAction.checkOutfirstname(firstName);
        await performanceGlitchUserAction.checkOutlastname(lastName);
        await performanceGlitchUserAction.checkOutpostalcode(postalCode);       
        await browser.pause(2000);
        await performanceGlitchUserAction.clickContinueLink();

        var name = await performanceGlitchUserAction.getProductNameFromInventory(count);
        expect(name).toEqual(productArray);
        var price = await performanceGlitchUserAction.getProductPriceFromInventory(count);
        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        
        const itemPrice = await performanceGlitchUserAction.getItemTotalPrice();
        expect(calculatedTotal).toEqual(itemPrice);
        //
        const expectedTotal = calculatedTotal + (calculatedTotal * TaxPercentage);
        const totalPricewithTax = await performanceGlitchUserAction.getItemTotalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);  //

        await performanceGlitchUserAction.clickFinishLink();
        await browser.pause(2000);

        const initiaiSuccessfulMessage = "Thank you for your order!";
        const actualSuccessfulMessge = await performanceGlitchUserAction.getSuccessfulMessage();
        expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);

        await performanceGlitchUserAction.clickHamburgerOpenMenu();
        await performanceGlitchUserAction.clickOnResetAppState();
        await browser.pause(2000);
        await performanceGlitchUserAction.clickOnLogoutButton();
        await browser.pause(2000);
        
    })

})