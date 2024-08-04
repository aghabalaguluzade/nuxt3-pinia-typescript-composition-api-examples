export interface TodoType {
    id: number,
    text: string,
    completed: boolean
}

export type TodoState = {
    loading: boolean,
    todos: TodoType[]
}