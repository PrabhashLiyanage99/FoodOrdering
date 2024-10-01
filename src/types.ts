export type Product = {
    id: number;
    image: string ;
    name: string;
    price: number;
};

export type PizzaSize = 'S' | 'M' | 'L' | 'XL';

export type CartItem = {
    id: string;
    product: Product;
    product_id :number;
    size : PizzaSize;
    quantity: number;
};

// export const OrderStatusList: OrderStatus[] = [
//     'New',
//     'Cooking',
//     'Delivering',
//     'Delivered'
// ]