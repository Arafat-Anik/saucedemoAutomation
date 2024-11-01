class performanceUserLocator {
    get pguUserNameField() {
        return $("//input[@name='user-name']");
    }
    get pguPasswordField() {
        return $("//input[@name='password']");
    }
    get pguloginButtonField() {
        return $("//input[@name='login-button']");
    }
    get pguhamburgerOpenMenuField() {
        return $("//button[@id='react-burger-menu-btn']");
    }

    get pguResetAppStateLink() {
        return $("//a[@id='reset_sidebar_link']");
    }

    get pguuhamburgerCloseLink() {
        return $("//button[@id='react-burger-cross-btn']");
    }

    // get pguNameFilterField(){
    //     return $("//select[@class='product_sort_container']//option[contains(text(),'Name (Z to A)')]");
    // }
    get pguOpenNameFilterField() {
        return $("//select[@class='product_sort_container']");
        //return $("//span[@class='select_container']");
    }

    get pguSelectNameFromFilter() {
        return $("//option[contains(text(),'Name (Z to A)')]");
    }

    // Add to cart button from the List
    get pguAddToCartFromList() {
        return $$("//button[contains(@id,'add-to-cart')]");
    }
    // CLick Add to Cart Button
    get pguAddtoCartLink() {
        return $("//a[@class='shopping_cart_link']");
    }

    get pguCheckoutbutton() {
        return $("//button[@id='checkout']");
    }

    get pguCheckOutFirstName() {
        return $("//input[@id='first-name']");
    }

    get pguCheckOutLastName() {
        return $("//input[@id='last-name']");
    }

    get pguCheckOutPostalCode() {
        return $("//input[@id='postal-code']");
    }

    get pguCheckOutToContinueLink() {
        return $("//input[@id='continue']");
    }
    // Get Product Name and Price from Inventory Cart
    get pgugetProductNamefromInventory() {
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get pgugetProductPricefromInventory() {
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }

    get pguitemTotalPriceCheckout() {
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get pguitemTotalPriceWithTax() {
        return $("//div[@class='summary_total_label']");
    }

    get pguFinishLink() {
        return $("//button[@id='finish']");
    }

    get successfulMessage() {
        return $("//h2[@class='complete-header']");
    }
    get pguLogoutLink() {
        return $("//a[@id='logout_sidebar_link']");
    }


}
module.exports = new performanceUserLocator();