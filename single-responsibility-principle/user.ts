class User {

    private _name: string
    private _age: number
    private _shoppingCart : Cart

    constructor(name: string, age: number){
        this._name = name
        this._age = age
    }

    getName(){
        return this._name
    }

    getAge(){
        return this._age
    }

    getShoppingCart() : Cart {
        return this._shoppingCart
    } 
    

    setShoppingCart(cart: Cart) {
        this._shoppingCart = cart
    }

    printCart(){
        console.log(this._shoppingCart.calculatePrice())
    }
}