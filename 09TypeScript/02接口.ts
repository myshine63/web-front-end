interface Productions {
    name?: string; // 可选
    readonly id: string; // 只读
    price: number;
    count: number;

    [propName: string]: any
}

let apple: Productions = {
    name: 'apple',
    id: '0101',
    price: 45,
    count: 23
}

interface PriceFunction {
    (price: number, count: number): number
}

let calc: PriceFunction = function (price: number, count: number) {
    return price * count
}

let fn = function (price: number, count: number): number {
    return
}

