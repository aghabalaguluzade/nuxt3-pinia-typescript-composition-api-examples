import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import shop from "~/api/shop";
import { type ProductState } from "~/types/Products";

export const useProductsState = defineStore('products', {
    state: (): ProductState => ({
        loading: false,
        products: []
    }),
    getters: {
        productIsInStock() {
            return (product) => {
                if(product.inventory > 0) {
                    return true;
                }else {
                    useToast().error('Out of stock.');
                    return false;
                }
            }
        }
    },
    actions : {
        setProducts(products) {
            this.products = products;
        },
        async fetchProducts() {
            this.loading = true;
            const fetchedProduct = await shop.getProducts();
            this.setProducts(fetchedProduct);
            this.loading = false;
        },
        async decrementProductInventory(product) {
            product.inventory--;
        }
    }
});