import React, { useState, useEffect } from 'react';
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import { TodoAppContext } from "../utils/contexts";
import { getTasks } from '../api/api';

function TodoView() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		const getAllTasks = async () => {
			const response = await getTasks();
			setTodoList(response.data);
		}

		getAllTasks();
	}, []);


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