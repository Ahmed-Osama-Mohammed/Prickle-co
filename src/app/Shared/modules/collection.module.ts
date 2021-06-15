export interface Collenction {
    name: string;
}
export interface ProductCollenction {
    name: string;
    price: number;
    id:number
    priceBefore?: number;
    bestSeller?: boolean;
    newArrival?:boolean;
    img: string
}
