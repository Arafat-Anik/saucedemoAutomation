const performanceUserLocator = require("./performanceGlitchUserLocator");

class pguActions {
    async clickOnpguUserName(pguname) {
        await performanceUserLocator.pguUserNameField.setValue(pguname);
    }
    async clickOnpguPassword(password) {
        await performanceUserLocator.pguPasswordField.setValue(password);
    }
    async clickOnpguLoginButton() {
        await performanceUserLocator.pguloginButtonField.click();
    }
    async clickHamburgerOpenMenu() {
        await performanceUserLocator.pguhamburgerOpenMenuField.click();
    }

    async clickOnResetAppState() {
        await performanceUserLocator.pguResetAppStateLink.click();
    }

    async clickOnHamburgerCloseMenu() {
        await performanceUserLocator.pguuhamburgerCloseLink.click();
    }
    // async clickOnNameFilterField() {
    //     await performanceUserLocator.pguNameFilterField.click();
    // }

    async clicktoOpenNameFilter() {
        await performanceUserLocator.pguOpenNameFilterField.click();
    }
    async selectNamefromFilter() {
        await performanceUserLocator.pguSelectNameFromFilter.click();
    }

    // Product Add to cart from the list

    async clickAddtoCartFromList(count) {
        const addToCartButtons = performanceUserLocator.pguAddToCartFromList;

        for (let i = 0; i < count; i++) {
            await addToCartButtons[i].click();
        }
    }
    // Click Add to Cart Button
    async clickOnAddtoCartButton() {
        await performanceUserLocator.pguAddtoCartLink.click();
    }

    async clickOnCheckout() {
        await performanceUserLocator.pguCheckoutbutton.click();
    }

    async checkOutfirstname(firstName) {
        await performanceUserLocator.pguCheckOutFirstName.setValue(firstName);
    }

    async checkOutlastname(lastName) {
        await performanceUserLocator.pguCheckOutLastName.setValue(lastName);
    }

    async checkOutpostalcode(postalCode) {
        await performanceUserLocator.pguCheckOutPostalCode.setValue(postalCode);
    }

    async clickContinueLink() {
        await performanceUserLocator.pguCheckOutToContinueLink.click();
    }

    //Get product Name From the Inventory Cart
    async getProductNameFromInventory(count) {
        var productNamefromList = performanceUserLocator.pgugetProductNamefromInventory;
        const itemNames = [];
        for (let i = 0; i < count; i++) {
            var productName = await productNamefromList[i].getText();
            itemNames.push(productName);

        }
        return itemNames;
    }
    // Get product Price From the Inventory Cart
    async getProductPriceFromInventory(count) {
        var productPricefromList = performanceUserLocator.pgugetProductPricefromInventory;
        const itemPrices = [];
        for (let i = 0; i < count; i++) {
            var productPrice = await productPricefromList[i].getText();
            const price = parseFloat(productPrice.replace('$', ''));
            itemPrices.push(price);
            //   console.log(`Product Price: ${productPrice}`);         
        }
        return itemPrices;
    }

    async getItemTotalPrice() {
        await browser.pause(2000);
        const itemTotalText = await performanceUserLocator.pguitemTotalPriceCheckout.getText();
        const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
        await browser.pause(2000);
        return itemTotalprice;
    }
    async getItemTotalPriceWithTax() {
        await browser.pause(2000);
        const itemTotalTax = await performanceUserLocator.pguitemTotalPriceWithTax.getText();
        console.log(`Tax1 ${itemTotalTax}`);
        const itemTotalwithTax = await parseFloat(itemTotalTax.replace('Total: $', ''));
        await browser.pause(2000);
        console.log(`Tax2 ${itemTotalwithTax}`);
        return itemTotalwithTax;
    }

    async clickFinishLink() {
        await performanceUserLocator.pguFinishLink.click();
    }
    async getSuccessfulMessage() {
        return await performanceUserLocator.successfulMessage.getText();
    }

    async getSuccessfulMessageDetails() {
        return await performanceUserLocator.successfulmessageDetails.getText();
    }

    async clickOnLogoutButton() {
        await performanceUserLocator.pguLogoutLink.click();
    }


}
module.exports = new pguActions();