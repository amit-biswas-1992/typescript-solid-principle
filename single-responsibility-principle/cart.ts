class Cart{

    _items: Item[]
    totalPrice: double

    constructor(items: Item[])

    addItem(item : Item){
        this._items.add(item)
    }

    updateItemQuantity(item: Item, quantity: number) {
        this._items.find(item).quantity(quantity)
    }


    //User or Item shoule not calculate price as calculating price is not there responsibility
    calculatePrice(): number{

        let total = 0
        for(const item of this.item){

            let price = item.getPrice()
            let quantity = item.getQuantity()

            totla += item.price*item.quantity
        }
        return total
    }

}