const standardUserActions = require("../pageobjects/standardUser/standardUserAction.js");

const stuname = "standard_user";
var password = "secret_sauce";
const count = 3;
var firstName = "arafat";
var lastName = "anik";
var postalCode = "1200";
var TaxPercentage = 0.08;

var productArray = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
];

describe("Standard User journey", () => {
    it("should standard user successfully login", async () => {
        await standardUserActions.clickOnstuUserName(stuname);
        await standardUserActions.clickOnstuUserPassword(password);
        await browser.pause(2000);
        await standardUserActions.clickOnstuloginButton();
    });

    it("standard user Menubar open close", async () => {
        await standardUserActions.clickHamburgerOpenMenu();
        await standardUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await standardUserActions.clickOnHamburgerCloseMenu();
        await browser.pause(3000);
    });

    it("standard user Add to cart", async () => {
        await standardUserActions.clickAddToCartFromList(count);
        await browser.pause(3000);
        await standardUserActions.clickOnAddToCart();
        await browser.pause(2000);
        await standardUserActions.clickOnCheckout();
        await browser.pause(2000);
    });

    it("standard user Checkout Information", async () => {
        await standardUserActions.checkOutfirstname(firstName);
        await standardUserActions.checkOutlastname(lastName);
        await standardUserActions.checkOutpostalcode(postalCode);
        await browser.pause(2000);
        await standardUserActions.clickContinueLink();
        await browser.pause(2000);
    });

    it("standard user Total price and Tax Verify", async () => {
        var name = await standardUserActions.getproductNameFromInventory(count);
        //   console.log(`Spec name ${typeof name}`);
        expect(name).toEqual(productArray);
        var price = await standardUserActions.getproductPriceFromInventory(count)
        //   console.log(`Spec price ${typeof price}`);
        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        //console.log(calculatedTotal);
        const itemPrice = await standardUserActions.getItemTotalPrice();
        console.log(`Item Price ${typeof itemPrice}`);
        expect(calculatedTotal).toEqual(itemPrice);
        
        const expectedTotal = calculatedTotal + (calculatedTotal * TaxPercentage);
        const totalPricewithTax = await standardUserActions.getItemTotalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);  //

        await standardUserActions.clickFinishLink();
        await browser.pause(2000);
    });

    it("standard user Item Order Successful message Verify", async () => {
        const initiaiSuccessfulMessage = "Thank you for your order!";
        const actualSuccessfulMessge = await standardUserActions.getSuccessfulMessage();
        //    expect(actualSuccessfulMessge).toContain(initiaiSuccessfulMessage);
        expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);

        const initialSuccessfulMesageDetails = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        const actualSuccessfulMesageDetails = await standardUserActions.getSuccessfulMessageDetails();
        expect(initialSuccessfulMesageDetails).toEqual(actualSuccessfulMesageDetails);
    });

    it("standard user Menubar open,Close and Logout", async () => {
        await standardUserActions.clickHamburgerOpenMenu();
        await standardUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await standardUserActions.clickOnLogoutButton();
    })
})

