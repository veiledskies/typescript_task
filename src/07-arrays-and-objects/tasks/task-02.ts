/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];

let available = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
        available.push(products[i]);
    }
}

console.log("Available Products:", available);


let names: string[] = [];

for (let i = 0; i < products.length; i++) {
    names.push(products[i].name);
}

console.log("Product Names:", names);


let total = 0;

for (let i = 0; i < products.length; i++) {
    total = total + (products[i].price * products[i].stock);
}

console.log("Total Stock Value:", total);


for (let i = 0; i < available.length; i++) {
    for (let j = i + 1; j < available.length; j++) {
        if (available[i].price < available[j].price) {
            let temp: typeof products[0] = available[i];

            available[i] = available[j];
            available[j] = temp;
        }
    }
}

console.log("Products From Most Expensive:", available);