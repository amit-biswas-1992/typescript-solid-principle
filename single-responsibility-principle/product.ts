class Product{
    private _id : number
    private _name: string
    private _unitPrice: double
    private _description: string

    constructor(id: number, name: string, unitPrice: double, description: string){
        this._id = id
        this._name = name
        this._unitPrice = unitPrice
        this._description = description
    }

    getId() : number {
        return this._id
    }

    getName() : string {
        return this._name
    }

    getPrice() : double{
        return this._unitPrice
    }
}