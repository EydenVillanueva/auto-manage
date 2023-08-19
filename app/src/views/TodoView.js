import React, { useState, useContext } from 'react';
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import Filters from "../components/todo/Filters";
import { TodoAppContext } from "../utils/contexts";

function TodoView() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: "do your bed", description: "you have to make your bed in the morning", status: "active" },
		{ id: 2, title: "eat your breakfast", description: "you have to cook and eat every morning", status: "completed" },
		{ id: 3, title: "Go to the Gym", description: "wake up early and drive to the gym", status: "active" },
	]);

	return (
		<TodoAppContext.Provider value={{ todoList, setTodoList }}>
			<div className="todoapp stack-large">
				<h1>Auto manage</h1>
				<NewTodoForm />
				<TodoList />
			</div>
		</TodoAppContext.Provider>
	);
}

export default TodoView;