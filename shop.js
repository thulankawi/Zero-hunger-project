let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listCards = [];

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'White Rice',
        image: '1.jpg',
        price: 400
    },
    {
        id: 2,
        name: 'Organic Quinoa',
        image: '2.jpg',
        price: 450
    },
    {
        id: 3,
        name: 'Eco Friendly Fertilizers',
        image: '3.jpeg',
        price: 800
    },
    {
        id: 4,
        name: 'Workshop For Farmers',
        image:  '4.jpg',
        price: 1500
    },
    {
        id: 5,
        name: 'Merch T-shirt',
        image: '5.jpeg',
        price: 2500
    },
    {
        id: 6,
        name: 'Seeds',
        image: '6.jpg',
        price: 100
    }
];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rs.${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price * value.quantity; // Adjusted totalPrice calculation
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>Rs.${(value.price * value.quantity).toLocaleString()}</div> <!-- Adjusted to show the total price for each item considering quantity -->
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Rs.' + totalPrice.toLocaleString(); 
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Find the checkOut container
let checkOutContainer = document.querySelector('.checkOut');

// Create a new checkout button
let checkoutButton = document.createElement('div');
checkoutButton.classList.add('checkoutButton');
checkoutButton.textContent = 'Checkout';

// Add a click event listener to the checkout button
checkoutButton.addEventListener('click', () => {
    // Check if there are any items in the cart
    let cartItems = listCards.filter(item => item !== null);
    if (cartItems.length > 0) {
        // Redirect to the checkout page if the cart is not empty
        window.location.href = 'checkout body.html';
    } else {
        // Show an alert if the cart is empty
        alert('Your cart is empty. Please add some items before checking out.');
    }
});

// Append the checkout button to the checkOut container
checkOutContainer.appendChild(checkoutButton);
initApp();