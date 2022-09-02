export default class Product{
    private _id : number
    private _name: string
    private _unitPrice: number
    private _description: string

    constructor(id: number, name: string, unitPrice: number, description: string){
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

    getPrice() : number{
        return this._unitPrice
    }
}