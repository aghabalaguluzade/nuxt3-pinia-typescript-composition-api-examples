<script setup lang="ts">
import { type TodoType } from "~/types/Todos";

const { $todoStore } = useNuxtApp();
const text = ref<string>("");

const createTask = () => {
  if (text.value === "") return;

  const item: TodoType = {
    id: Date.now(),
    text: text.value,
    completed: false,
  };
  $todoStore.createItem(item);
  text.value = "";
};
</script>

<template>
  <form class="my-4" @submit.prevent="createTask">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input
          v-model="text"
          class="w-full focus:outline-none"
          type="text"
          placeholder="What task do you need to complete?"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>