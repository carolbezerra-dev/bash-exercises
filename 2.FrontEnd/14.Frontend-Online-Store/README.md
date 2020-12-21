# Welcome to the Front-End Online Store project repository!

---

In this project you will create a simplified version, without persistence in the database, of an ** online store **. From these demands, we will have an application where users will be able to:
   - Search products by terms and categories from the _API of Mercado Livre_;
   - Interact with the products sought in order to add and remove them from a shopping cart in different quantities;
   - View details and previous evaluations of a product, as well as create new evaluations;
   - And finally, finalize the (simulated) purchase of the selected items.

### Documentation of the Mercado Livre API

Your _web_ page will consume the data from the _Mercado Livre_ API to search for items from your online store. To perform these searches, you will need to consult the following _endpoints_:

- To list the available categories:
  - Request type: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- To search for items by term:
  - Request type: `GET`
  - $ QUERY search parameter (this parameter must be replaced by the search field value)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- To search for items by category:
  - Request type: `GET`
  - $ CATEGORY_ID search parameter (this parameter must be replaced with the selected category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- To search for items in a category by term:
  - Request type: `GET`
  - $ QUERY search parameter (this parameter must be replaced by the search field value)
  - $ CATEGORY_ID search parameter (this parameter must be replaced with the selected category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

---

### LIST OF REQUIREMENTS

#### 1. IMPLEMENT A FREE MARKET API ACCESS MODULE

**PRIORITY 0** - Implement a module that accesses the Free Market API

Call the _Mercado Livre_ API and return a [Promise] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the result data.

#### 2. CREATE EMPTY PRODUCT LISTING PAGE

**PRIORITY 0** - Create the search field on the main screen, the product listing, initially empty. The empty listing should contain the message "Please enter a search term or choose a category".

#### 3. CREATE SHOPPING CART PAGE

**PRIORITY 1** - Create the shopping cart button on the main product listing screen, and create a shopping cart screen, initially empty.

#### 4. LIST THE PRODUCT CATEGORIES AVAILABLE VIA API ON THE MAIN PAGE

**PRIORITY 1** - List category filters obtained from the API on the main product listing screen. The API request to retrieve the categories must be done only once after the screen is loaded.

#### 5. SEARCH FOR TERMS AND RECEIVE A LIST OF PRODUCTS, WITH SUMMARY DATA, ASSOCIATED WITH THESE TERMS

**PRIORITY 1** - Create the product listing. Briefly display the product (the "card" that appears in the listing). The exhibition must have a title, photo and price. Make a request to the Mercado Livre API by sending the terms sought by those who use and use the return to make the listing of the products. If the search does not return results, generate the corresponding screen with the text "No products were found".

#### 6. SELECT A CATEGORY AND SEE ONLY PRODUCTS FROM THAT CATEGORY

**PRIORITY 2** - The page should now be able to use the categories retrieved from the API to filter the products searched for. The terms and categories entered by the user must be used together for more specific filtering.

#### 7. CLICK ON THE SUMMARY DISPLAY OF A PRODUCT AND GO TO A SCREEN WITH ITS DETAILED DISPLAY

**PRIORITY 3** - When bidding on the product card and has the detailed display of the product with the product name, image, price and technical specification. The screen should also have a button that leads to the shopping cart (see details on the card).

#### 8. ADD PRODUCTS FROM THE PRODUCT LISTING SCREEN

**PRIORITY 3** - On the product list screen, allow adding the product to the cart.

#### 9. ADD A PRODUCT TO THE CART FROM YOUR DETAILED DISPLAY SCREEN

**PRIORITY 3** - On the product list screen, allow adding the product to the cart.

#### 10. VIEW THE LIST OF PRODUCTS ADDED TO THE CART ON YOUR PAGE AND HANDLE YOUR QUANTITY

**PRIORITY 3** - Add product list to cart, with total value at the end. Create buttons (-) and (+) for each product in the cart, allowing you to change the desired quantity of each product. The quantity cannot be negative. Also create button (X) to remove products from the cart and button to complete the purchase.

#### 11. EVALUATE AND COMMENT ABOUT A PRODUCT ON YOUR DETAILED DISPLAY SCREEN

**PRIORITY 3** - Add form to the product, in its detailed display, to allow adding ratings with a rating of 1 to 5 stars and comments (the comment must be optional, being possible to send only the note). Display the list of evaluations already made. If the user leaves and returns to the screen, the score and evaluations should not be deleted.

#### 12. FINALIZE PURCHASE, SEEING A SUMMARY OF IT, FILLING IN MY DATA AND CHOOSING THE PAYMENT METHOD

**PRIORITY 4** - Implement screen to finalize the purchase. The screen should contain a section for reviewing the products with the total purchase price, a form to have the buyer's information and a section to choose the payment method. When clicking on "Buy", it must be validated that the form is completed and that the payment method was chosen and, if so, the status must be reset, redirected to the initial screen (product listing). If something has not been filled in, it remains on the same screen with the data without deleting and the fields not filled in red are highlighted.

### BONUS:

#### 13. SEE NEXT TO THE CART ICON THE AMOUNT OF PRODUCTS WITHIN IT, ON ALL SCREENS ON WHICH IT APPEARS

**PRIORITY 4** - Add to the cart icon, on all screens where it appears, a number with the quantity of products added.

#### 14. THE AMOUNT OF PRODUCTS ADDED TO THE CART MUST BE LIMITED BY THE AMOUNT AVAILABLE IN STOCK

**PRIORITY 4** - Add available quantity of the product (available via API call in the key "available_quantity") and limit the purchase according to the quantity in stock. Disable the (+) buttons of that product in the application when reaching the maximum amount of it in stock.

#### 15. SEE WHICH PRODUCTS HAVE FREE SHIPPING

**PRIORITY 4** - Add free shipping indicator to the summary and detailed display of the product.

---

#VQV
