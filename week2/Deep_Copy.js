const order = {
    orderId: "ORD1001",
    customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
};

// Create a deep copy of order
let orderCopy=structuredClone(order)

// Modify in copied object:
// i. customer.address.city
orderCopy.customer.address.city='Warangal'

// ii. items[0].price
orderCopy.items[0].price=50000

//  iii. Verify original object remains unchanged
console.log('order: ',order,' ordercopy: ',orderCopy)