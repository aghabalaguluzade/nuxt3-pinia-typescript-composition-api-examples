<script setup>
import UserList from "@/components/UserList.vue";
import { useUsersStore } from "~/store/users";

const store = useUsersStore();

onMounted(async () => {
  store.changeLoading(true);
  try {
    const data = await $fetch("https://jsonplaceholder.typicode.com/users");
    store.setUsers(data);
    store.changeLoading(false);
  } catch (error) {
    console.error("Error loading API result:", error);
  } finally {
    store.changeLoading(false);
  }
});
</script>

<template>
  <UserList v-for="users in store.users" :users="users" :loading="store.loading" />
</template>