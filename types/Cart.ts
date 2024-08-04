export interface CartProductType {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface CartState {
    cart: CartProductType[];
    checkoutStatus: string;
    loading: boolean;
}