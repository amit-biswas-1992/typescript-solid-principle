import Item from "./item"
  

export class Cart{

    _items: Item[]
    totalPrice: number = 0

    constructor(){
        this._items = []
    }


    addItem(item : Item){
        this._items.push(item)
    }

    updateItemQuantity(item: Item, quantity: number) {
        let foundItem = this._items.find(elem => elem == item)
        foundItem?.setQuantity(quantity)
    }


    //User or Item shoule not calculate price as calculating price is not there responsibility
    calculatePrice(): number{

        let total = 0
        for(const item of this._items){

            let price = item.getPrice()
            let quantity = item.getQuantity()

            total += item.getPrice()*item.getQuantity()
        }
        return total
    }

}