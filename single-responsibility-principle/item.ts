class Item{

    private _productId: number
    private _unitPrice: number
    private _quantity: number

    constructor(productId: number, unitPrice: double, quantity: number){
        this._productId = productId
        this._unitPrice = unitPrice
        this._quantity = quantity
    }

    getPrice(): double{
        return this._price
    }

    getQuantity(): number{
        return this._quantity
    }

}