/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
};

const products: Product[] = [
    {
        productCode: "P001",
        productName: "Wireless Headphones",
        sellingPrice: 99.99,
        stockQuantity: 50,
        productWeight: 0.5,
        averageCustomerRating: 4.5,
        isDiscounted: true,
    },
    {
        productCode: "P002",
        productName: "Smartphone",
        sellingPrice: 699.99,
        stockQuantity: 30,
        productWeight: 0.3,
        averageCustomerRating: 4.7,
        isDiscounted: false,
    },
    {
        productCode: "P003",
        productName: "Laptop",
        sellingPrice: 1299.99,
        stockQuantity: 20,
        productWeight: 1.5,
        averageCustomerRating: 4.8,
        isDiscounted: true,
    }
];

products.forEach(product => {
    console.log("Product Code: " + product.productCode);
    console.log("Product Name: " + product.productName);
    console.log("Selling Price: $" + product.sellingPrice.toFixed(2));
    console.log("Stock Quantity: " + product.stockQuantity);
    console.log("Product Weight: " + product.productWeight + " kg");
    console.log("Average Customer Rating: " + product.averageCustomerRating);
    console.log("Is Discounted: " + product.isDiscounted);
    console.log("---");
});