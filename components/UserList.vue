<script setup lang="ts">
import type { UserState } from '~/types/Users';

defineProps<{
  users: UserState[];
  loading: boolean;
}>();

</script>

<template>
    <div>
        <h2 class="mb-2">User Information</h2>
        <img
          v-if="loading"
          src="https://i.imgur.com/JfPpwOA.gif"
          alt="loading..."
          class="my-8 mx-auto"
        />
        <div v-else>
          <p v-for="user in users" :key="user.id">
            <strong>Name:</strong> {{ user.name }}<br>
            <strong>Email:</strong> {{ user.email }}<br>
            <strong>Phone:</strong> {{ user.phone }}
            <hr>
          </p>
        </div>
      </div>
</template>