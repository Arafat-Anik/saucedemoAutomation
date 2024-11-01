class standardUserLocator{
    get stuuserNameField(){
        return $("//input[@name='user-name']");
    }

    get stupasswordField(){
        return $("//input[@name='password']");
    }

    get stuloginButtonField(){
        return $("//input[@name='login-button']");
    }

    get stuhamburgerOpenMenuField(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get stuResetAppStateLink(){
        return $("//a[@id='reset_sidebar_link']");
    }

    get stuhamburgerCloseLink(){
        return $("//button[@id='react-burger-cross-btn']");
    }

    // Click Add to cart button from List
    get stuAddToCartFromList(){
        return $$("//button[contains(@id,'add-to-cart')]");
      //  return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }

    get stuAddToCartLink(){
        return $("//a[@class='shopping_cart_link']");
    }

    // Get Product Name from List
    get stugetProductNamefromList(){
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get stugetProductPricefromList(){
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }
    

    get stuCheckoutbutton(){
        return $("//button[@id='checkout']");
    }

    get stuCheckOutFirstName(){
        return $("//input[@id='first-name']");
    }

    get stuCheckOutLastName(){
        return $("//input[@id='last-name']");
    }

    get stuCheckOutPostalCode(){
        return $("//input[@id='postal-code']");
    }

    get stuCheckOutToContinueLink(){
        return $("//input[@id='continue']");
    }

    get itemTotalPriceCheckout(){
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get itemTotalPriceWithTax(){
        return $("//div[@class='summary_total_label']");
    }
    
    get stuFinishLink(){
        return $("//button[@id='finish']");
    }
    get successfulMessage(){
        return $("//h2[@class='complete-header']");
    }
    get stuLogoutLink(){
        return $("//a[@id='logout_sidebar_link']");
    }
    

}

module.exports = new standardUserLocator();