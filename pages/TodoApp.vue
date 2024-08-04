<script setup lang="ts">
import { useTodosStore } from '~/store/todos';
import NewItem from '@/components/NewItem.vue';
import TodoList from '@/components/TodoList.vue';

const store = useTodosStore();

const loading = ref(store.loading);

const completedCount = computed(() => store.completedCount);
const totalCount = computed(() => store.totalCount);



</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-center p-2 font-bold">
      Vue 3 Todo App with Typescript and Vuex 4
    </h1>

    <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>
