const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100 //changed to let so we can update
const orderQueue = []
let nextOrderId = 1 //added for function 3
/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
/** 
* What i wrote initially :
* function placeOrder(pizzaName) {
    let pizza = menu.find(pizzaName)
    cashInRegister += pizza.menu.price
    orderQueue.push(pizza.menu.name)
    return orderQueue
}
*/
function placeOrder (pizzaName) {
    // 1. Find the pizza (we check if the name matches the one passed in)
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

    // 2. Add income
    cashInRegister += selectedPizza.price

    // 3. Create the order object and push to queue
    //const newOrder = { pizza: selectedPizza, status: "ordered" } --Changed for improvement
    const newOrder = { orderId: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)

    // 4. Return the new order object
    return newOrder
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
/**
 * function completeOrder(orderId) {
    const correctOrder = orderQueue.find(orderObj => orderObj.orderId === orderId)
    correctOrder.status = "completed"
    return correctOrder
}
 */

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)