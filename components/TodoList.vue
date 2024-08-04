<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
const { $todoStore } = useNuxtApp();
const todos = computed(() => $todoStore.todos);

onMounted(async () => {
    await $todoStore.getTodoItems();
});

</script>

<template>
  <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>