export default class Item{

    private _productId: number
    private _unitPrice: number
    private _quantity: number

    constructor(productId: number, unitPrice: number, quantity: number){
        this._productId = productId
        this._unitPrice = unitPrice
        this._quantity = quantity
    }

    getPrice(): number{
        return this._unitPrice
    }

    getQuantity(): number{
        return this._quantity
    }

    setQuantity(quantity : number){
        this._quantity = quantity
    }

}

