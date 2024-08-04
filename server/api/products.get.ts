import { ProductState } from "~/types/Products";

export default defineEventHandler(async (event) => {
    const { baseUrl } = useRuntimeConfig(event);
    const response = await $fetch<ProductState>(`${baseUrl}/products`, {
        method : 'GET'
    });
    return response;
});