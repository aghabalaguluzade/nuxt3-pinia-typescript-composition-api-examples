import { defineStore } from 'pinia'
import type { TodoState, TodoType } from '~/types/Todos'
import { useToast } from 'vue-toastification'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const useTodosStore = defineStore('todos', {
    state: (): TodoState => ({
        loading: false,
        todos: []
    }),
    getters: {
        completedCount: (state) => state.todos.filter(todo => todo.completed).length,
        totalCount: (state) => state.todos.length
    },
    actions: {
        setLoading(status: boolean) {
            this.loading = status;
        },
        createItem(todo: TodoType) {
            this.todos.unshift(todo);
            useToast().success('Add New Todo');
        },
        setItems(todos: TodoType[]) {
            this.todos = todos;
        },
        async getTodoItems() {
            this.setLoading(true);
            await sleep(1000);
            this.setLoading(false);
            this.setItems([
                {
                    id: 1,
                    text: 'Create awesome Vue 3 with Vuex 4 video!',
                    completed: false
                },
                {
                    id : 2,
                    text : 'Create awesome Nuxt 3 with Pinia video',
                    completed : true
                }
            ]);
        },
        completeItem(newTodo: TodoType) {
            const todo = this.todos.findIndex(todo => todo.id === newTodo.id);
            if (todo === -1) return;
            this.todos[todo] = { ...this.todos[todo], ...newTodo };
            useToast().success('Completed Todo');
        },
        deleteItem(todo: TodoType) {
            this.todos = this.todos.filter(item => item.id !== todo.id);
            useToast().error('Deleted Todo');
        }
    }
});