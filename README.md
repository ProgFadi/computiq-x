# Task-09
## TO DO:
* Fork the repo
* Clone the forked repo to your local machine
* Resolve the task
* Commit your solution
* Push to GitHub
* Create a pull request

Task Requirements, Hints and details:
- Take a look at below sketched layout to understand the requirements.
![Main](https://user-images.githubusercontent.com/20383171/144898668-3ba8dba8-804d-4e9f-a09c-ddfe916d8f5c.png)

- Fetch products list from an API, render them on UI like what you did in previous task (with search functionalities), use this free API https://github.com/keikaavousi/fake-store-api
- Protect Products page to be viewed by authorized users only. 
- Enable functionality of "add to cart" button for each product card. when the user click on "add to cart" for each product, the product object should be added to a stored array in local storage.
- Add cart icon besides Avatar component at App Bar.
- Create a new page called 'cart'.
- Enable "Cart icon" to be clickable component, once the user click on it, the page 'cart' should be displayed with rendering products that stored in local storage.
- Enable "Remove" button for each cart product which is used for removing this item from array in local storage.
- Implement Details Paper component.


Hints:
- Use axios package for fetching products from free API : https://github.com/keikaavousi/fake-store-api
- Use the same card design that you used previously with some customization to view full details of a product.
- Style components with MUI.
- Use localstorage to save cart list, don't forget that you need to stringify object before saving it.
- Product card in cart  page should have button with "remove" functionality instead of "add to cart".
- Use MUI icons.
- Use Box, Paper, Icons, Buttons, Textfield from MUI for easy implement.
- Use sx and className to style your component.
