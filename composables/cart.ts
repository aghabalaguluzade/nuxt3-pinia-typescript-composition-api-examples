import { useCartState } from "~/store/cart";

export function useCart() {
    const store = useCartState();
    const cartProducts = computed(() => store.cart);
    const total = computed(() => store.cartTotal);
    const checkoutStatusMessage = computed(() => store.checkoutStatus);

    const checkout = () => {
        store.checkout();
    };

    return {
        cartProducts,
        total,
        checkoutStatusMessage,
        checkout
    };
}