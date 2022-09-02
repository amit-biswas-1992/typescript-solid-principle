import { Cart } from "./cart"
import Item from "./item"
import Product from "./product"
import User from "./user"

let customerA = new User("Amit", 30)
let customerB = new User("Biswas",30)

let items : Item[] = []

let product1 = new Product(1,"Banana", 10, "fruit")
let product2 = new Product(2,"PC", 100, "Hardware")

let item1 = new Item(product1.getId(), product1.getPrice(), 2)
let item2 = new Item(product2.getId(), product1.getPrice(), 5)


let cart = new Cart()
cart.addItem(item1)


customerA.setShoppingCart(cart)
customerA.printCart()

cart.addItem(item2)


customerB.setShoppingCart(cart)

customerB.printCart()