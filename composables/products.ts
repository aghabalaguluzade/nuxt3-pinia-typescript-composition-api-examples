import { useProductsState } from "~/store/products";
import { useCartState } from "~/store/cart";
import type { ProductType } from "~/types/Products";

export function useProducts() {
    const store = useProductsState();
    const cart = useCartState();

    const products = computed<ProductType[]>(() => store.products);
    const loading = computed<boolean>(() => store.loading);

    const fetchProducts = () => {
        store.fetchProducts();
    };

    const productIsInStock = (product: ProductType) => {        
        return product.inventory > 0;
    };

    const addProductToCart = (product: ProductType) => {
        cart.addProductToCart(product);
    };

    return {
        products,
        loading,
        fetchProducts,
        productIsInStock,
        addProductToCart
    };
}