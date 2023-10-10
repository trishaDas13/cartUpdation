# cartUpdation

Hosting link : https://trishadas13.github.io/cartUpdation/

<hr>

<h2>👉 HTML code Description </h2>

There's a container div with two main sections: "product" and "cart."
Inside the "product" section, you have a list (ul) of three products. Each product has a name, a price, and buttons to increase (+) or decrease (-) the quantity.
The "cart" section initially displays a message indicating that no products have been added to the cart, with a heading "Cart" above it.
Below the message, there's a "TOTAL" section that shows the total cost of the items in the cart. Currently, it displays a total of 0.00, indicating that the cart is empty.

<hr>

<h2>👉 CSS code Description </h2>

The CSS code starts with a universal selector (*) that resets margins and padding to zero and sets the box-sizing model to border-box for all elements on the webpage, ensuring consistent layout behavior.

The body element is styled to create a full viewport height (100vh) container with flexbox properties for centering its child elements both horizontally and vertically. A linear gradient background is applied to create a gradient background effect transitioning from a teal color (#5ee7df) at the top to a purple color (#b490ca) at the bottom.

The .container class styles a container element with a width of 40rem, flex properties for space between its children, padding, and a background color that gives it a reddish-brown shade.

Within the container, there are two sections, .product and .cart, which are styled as rectangular blocks. They both have padding, a width of 55% for the product section and 43% for the cart section, and a light blue background color.

The .cart section has additional styles that make it a column layout and space elements evenly within it.

The "h1" element within the container is centered using text alignment.

Both the .product and .cart sections contain lists ("li") for displaying product information. These lists have no list-style bullets, padding, and a coral background color. The items within the lists are spaced evenly with flex properties, and they have rounded corners (border-radius).

The last child of the list items, which is the quantity section, has a white background, width of 3rem, and contains buttons for adjusting the quantity. The buttons have a black background, white text, padding, and rounded corners.

Finally, there's an "h3" element with the class .content h3 that has reduced opacity to give it a slightly transparent appearance and is centered using text alignment.
<hr>
<h2>👉 JAVASCRIPT code Description </h2>
1.	The code selects various elements on the page using document.querySelectorAll and stores them in variables for further manipulation.
2.	It initializes a variable amount to keep track of the total price.
3.	It sets up event listeners for each product's "plus" and "minus" buttons (plus[i] and minus[i]) within a loop that iterates through the products.
4.	Inside the event listeners for the "plus" buttons, it increments the quantity displayed (num[i].innerText) when the button is clicked. If the quantity is 1, it creates a new card in the cart (.content) for the product with its name and price. It updates the amount variable and displays the total price.
5.	Inside the event listeners for the "minus" buttons, it decrements the quantity displayed. If the quantity becomes 0, it removes the product card from the cart if it exists. It updates the amount variable and displays the total price.
6.	It uses CSS classes (first, second, third) to differentiate between different products in the cart.
7.	It handles scenarios where the cart is empty or the total price reaches zero, showing or hiding relevant elements (noCart and total[1]).
<hr>
<h2>🟡 Summary </h2>

In summary, this code creates a simple shopping cart that allows users to add and remove products, updates the cart's contents and total price dynamically, and handles various scenarios for displaying and updating cart information.



