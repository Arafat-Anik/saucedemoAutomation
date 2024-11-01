const standardUserLocator = require("./standardUserLocator");

class stuLoginActons {
    async clickOnstuUserName(stuname) {
        await standardUserLocator.stuuserNameField.setValue(stuname);
    }

    async clickOnstuUserPassword(password) {
        await standardUserLocator.stupasswordField.setValue(password);
    }

    async clickOnstuloginButton() {
        await standardUserLocator.stuloginButtonField.click();

    }

    async clickHamburgerOpenMenu() {
        await standardUserLocator.stuhamburgerOpenMenuField.click();
    }

    async clickOnResetAppState() {
        await standardUserLocator.stuResetAppStateLink.click();
    }

    async clickOnHamburgerCloseMenu() {
        await standardUserLocator.stuhamburgerCloseLink.click();
    }
    // Click Product Add to cart from list with loop
    async clickAddToCartFromList(count) {
   //     var productNamefromList = standardUserLocator.stugetProductNamefromList;
   //     var productPricefromList = standardUserLocator.stugetProductPricefromList;
        const addToCartButtons = standardUserLocator.stuAddToCartFromList;
        
        for (let i = 0; i < count; i++) {
  //          var productName = await productNamefromList[i].getText();
  //          var productPrice = await productPricefromList[i].getText();
            await addToCartButtons[i].click();

   //         console.log(`Product Name: ${productName}, Price: ${productPrice}`);
            // console.log(`Product Price: ${productPrice}`);

            //    await standardUserLocator.stuProductFromList.click();
        }
   //     return productName,productPrice;
    }

    async clickOnAddToCart() {
        await standardUserLocator.stuAddToCartLink.click();
    }

    async getproductNameFromInventory(count){
        var productNamefromList = standardUserLocator.stugetProductNamefromList;
        const itemNames = [];
        for (let i = 0; i < count; i++) {
            var productName = await productNamefromList[i].getText();
            itemNames.push(productName);             
        }
        return itemNames;
    }
    
    async getproductPriceFromInventory(count){
        var productPricefromList = standardUserLocator.stugetProductPricefromList;
        const itemPrices = [];
        for (let i = 0; i < count; i++) {
            var productPrice = await productPricefromList[i].getText();
            const price = parseFloat(productPrice.replace('$', ''));
            itemPrices.push(price);
         //   console.log(`Product Price: ${productPrice}`);         
        }
        return itemPrices;
    }

    async clickOnCheckout() {
        await standardUserLocator.stuCheckoutbutton.click();
    }

    async checkOutfirstname(firstName) {
        await standardUserLocator.stuCheckOutFirstName.setValue(firstName);
    }

    async checkOutlastname(lastName) {
        await standardUserLocator.stuCheckOutLastName.setValue(lastName);
    }

    async checkOutpostalcode(postalCode) {
        await standardUserLocator.stuCheckOutPostalCode.setValue(postalCode);
    }

    async getItemTotalPrice(){
        await browser.pause(2000);
        const itemTotalText = await standardUserLocator.itemTotalPriceCheckout.getText();
        const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
        await browser.pause(2000);
        return itemTotalprice;
    }
    async getItemTotalPriceWithTax(){
        await browser.pause(2000);
        const itemTotalTax = await standardUserLocator.itemTotalPriceWithTax.getText();
        console.log(`Tax1 ${itemTotalTax}`);
        const itemTotalwithTax = await parseFloat(itemTotalTax.replace('Total: $', ''));
        await browser.pause(2000);
        console.log(`Tax2 ${itemTotalwithTax}`);
        return itemTotalwithTax;
    }
    async clickContinueLink() {
        await standardUserLocator.stuCheckOutToContinueLink.click();
    }

    async clickFinishLink() {
        await standardUserLocator.stuFinishLink.click();
    }
    async getSuccessfulMessage() {
        return await standardUserLocator.successfulMessage.getText();
    }

    async clickOnLogoutButton() {
        await standardUserLocator.stuLogoutLink.click();
    }


}

module.exports = new stuLoginActons();