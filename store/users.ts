import { defineStore } from "pinia";
import type { UserState } from "~/types/Users";

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        loading: false,
        users: [],
    }),
    getters : {

    },
    actions : {
        setUsers(users: UserState) {
            this.users.push(users);
        },
        changeLoading(loading: UserState) {
            this.loading = loading;
        },
    }
});