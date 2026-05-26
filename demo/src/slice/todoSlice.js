import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = {
    todos: [{ id: nanoid(), text: "Learn Redux" }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload })
        },
    }
})
export const { addtodo, deletetodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
