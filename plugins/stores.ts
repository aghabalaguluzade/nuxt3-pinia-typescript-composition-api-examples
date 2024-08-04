import { useTodosStore } from "~/store/todos";

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide : {
            todoStore : useTodosStore()
        }
    }
});