class Product{
    private _name: string
    private _price: double
    private _description: string

    constructor(name: string, price: double, description: string){
        this._name = name
        this._price = price
        this._description = description
    }

    getPrice(){
        return this._price
    }
}