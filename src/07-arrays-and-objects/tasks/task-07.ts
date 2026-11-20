/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completed = orders.filter(function(order) {
    return order.status === "completed";
});

console.log("Completed Orders:", completed);

const orderTotals = orders.map(function(order) {
    let total = order.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    return {
        customer: order.customer,
        total: total
    };
});

console.log("Order Totals:", orderTotals);

const highest = orderTotals.reduce(function(max, order) {
    if (order.total > max.total) {
        return order;
    }

    return max;
});

console.log("Highest Spending Customer:", highest);

const revenue = completed.reduce(function(total, order) {
    let orderTotal = order.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    return total + orderTotal;
}, 0);

console.log("Total Revenue:", revenue);

const purchasedProducts = orders.reduce(function(products, order) {
    for (let i = 0; i < order.items.length; i++) {
        if (!products.includes(order.items[i].product)) {
            products.push(order.items[i].product);
        }
    }

    return products;
},[] as string []);

console.log("Purchased Products:", purchasedProducts);