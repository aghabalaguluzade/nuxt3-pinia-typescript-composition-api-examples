import { defineStore } from "pinia";
import shop from "~/api/shop";
import { useProductsState } from "~/store/products";
import type { CartState } from "~/types/Cart";
import { useToast } from 'vue-toastification'

export const useCartState = defineStore('cart', {
    state: (): CartState => ({
        cart: [],
        checkoutStatus: '',
        loading: false,
    }),
    getters: {
        cartProducts(state){
            const productStore = useProductsState();
                return state.cart.map(cartItem => {
                const product = productStore.products.find(product => product.id === cartItem.id);
                if(product) {
                    return {
                        ...cartItem,
                        title : product.title,
                        price : product.price
                    }
                }else {
                    return cartItem;
                }
            });
        },
        cartTotal(state) {
            return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    },
    actions : {
        pushProductToCart(cart) {
            this.cart.push({
                id : cart.id,
                title : cart.title,
                price : cart.price,
                quantity : 1
            });
        },
        incrementItemQuantity(cartItem) {
            cartItem.quantity++;
        },
        emptyCart() {
            this.cart = [];
        },
        setCheckoutStatus(checkoutStatus) {
            this.checkoutStatus = checkoutStatus;
        },
        async addProductToCart(product) {
            const productStore = useProductsState();

            if(! productStore.productIsInStock(product)) {
                return;
            }
            
            const cartItem = this.cart.find(item => item.id === product.id);

            if(! cartItem) {
                this.pushProductToCart(product);
                useToast().success('Add to Shopping Cart.');
            }else {
                this.incrementItemQuantity(cartItem);
            }
            
            productStore.decrementProductInventory(product);
        },
        async checkout() {
            try {
                await shop.buyProducts(
                    this.cart,
                    () => {
                        this.emptyCart();
                        this.setCheckoutStatus('Purchase completed successfully! Thank you for shopping with us.');
                        useToast().success('Purchase completed successfully! Thank you for shopping with us.');
                    },
                    () => {
                        this.setCheckoutStatus('Oops! Something went wrong during checkout. Please try again later.');
                        useToast().error('Oops! Something went wrong during checkout. Please try again later.');
                    }
                )
            } catch (error) {
                this.setCheckoutStatus('fail');
                useToast().error('Oops! Something went wrong. Please try again later.');
            }
        }
    }
});