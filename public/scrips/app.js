//Product list

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        image: "1.png",
        price: 100
    },
    {
        id: 2,
        name: "PRODUCT 2",
        image: "2.png",
        price: 200
    },
    {
        id: 3,
        name: "PRODUCT 3",
        image: "3.png",
        price: 300
    },
    {
        id: 4,
        name: "PRODUCT 4",
        image: "4.png",
        price: 400
    },
    {
        id: 5,
        name: "PRODUCT 5",
        image: "5.png",
        price: 500
    },
    {
        id: 6,
        name: "PRODUCT 6",
        image: "6.png",
        price: 600
    },
    {
        id: 7,
        name: "PRODUCT 7",
        image: "7.png",
        price: 700
    },
    {
        id: 8,
        name: "PRODUCT 8",
        image: "8.png",
        price: 800
    },
    {
        id: 9,
        name: "PRODUCT 9",
        image: "1.png",
        price: 100
    },
    {
        id: 10,
        name: "PRODUCT 10",
        image: "2.png",
        price: 200
    },
    {
        id: 11,
        name: "PRODUCT 11",
        image: "3.png",
        price: 300
    },
    {
        id: 12,
        name: "PRODUCT 12",
        image: "4.png",
        price: 400
    },
    {
        id: 13,
        name: "PRODUCT 13",
        image: "5.png",
        price: 500
    },
    {
        id: 14,
        name: "PRODUCT 14",
        image: "6.png",
        price: 600
    },
    {
        id: 15,
        name: "PRODUCT 15",
        image: "7.png",
        price: 700
    },
    {
        id: 16,
        name: "PRODUCT 16",
        image: "8.png",
        price: 800
    },
    {
        id: 17,
        name: "PRODUCT 17",
        image: "1.png",
        price: 100
    },
    {
        id: 18,
        name: "PRODUCT 18",
        image: "2.png",
        price: 200
    },
    {
        id: 19,
        name: "PRODUCT 19",
        image: "3.png",
        price: 300
    },
    {
        id: 20,
        name: "PRODUCT 20",
        image: "4.png",
        price: 400
    },
    {
        id: 21,
        name: "PRODUCT 21",
        image: "4.png",
        price: 400
    }
]

//Shopping card system

const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.quantity');

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="img/${value.image}" alt="">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to card</button>

        <div class="voting">
            <button class="likeBtn">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <input type="number" class="input1" value="0" name="">

            <button class="dislikeBtn">
                <i class="fa-regular fa-thumbs-down"></i>
            </button>
            <input type="number" class="input2" value="0" name="">
        </div>
        `
        list.appendChild(newDiv)
    })
}

initApp()

const addToCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1; // Incrémentation de la quantité si le produit existe déjà
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let totalPrice = 0;
    let totalCount = 0; // Variable pour calculer la quantité totale

    listCards.forEach((value) => { // Utilisation de forEach pour itérer à travers les produits
        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
        <img src="img/${value.image}" alt="">
        <div class="cardTitle">${value.name}</div>
        <div class="cardPrice">${(value.price * value.quantity).toLocaleString()}</div>
        
        <div>
            <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${value.id - 1}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${value.id - 1}, ${value.quantity + 1})">+</button>
        </div>
        `;
            listCard.appendChild(newDiv);

            totalPrice += value.price * value.quantity;
            totalCount += value.quantity;
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = totalCount;
}

const changeQuantity = (key, quantity) => {
    if (quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }

    reloadCard()
}

//Voting système

let likeBtn = document.querySelector('.likeBtn');
let dislikeBtn = document.querySelector('.dislikeBtn');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');

document.querySelectorAll('.likeBtn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let input1 = btn.closest('.item').querySelector('.input1');
        input1.value = parseInt(input1.value) + 1;
        input1.style.color = "#12ff00";
    });
});

document.querySelectorAll('.dislikeBtn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let input2 = btn.closest('.item').querySelector('.input2');
        input2.value = parseInt(input2.value) + 1;
        input2.style.color = "#ff0000";
    });
});

