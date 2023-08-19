import { createContext } from "react";

export const TodoAppContext = createContext({
	todoList: [],
	setTodoList: (list) => {},
});