import React, { useContext } from 'react';

import Todo from './Todo';
import { TodoAppContext } from "../../utils/contexts";

function TodoList(props) {
	const { todoList } = useContext(TodoAppContext);
	console.log(todoList);

	const renderTodos = (todos) => todos.map((todo) => (
		<Todo
			title={todo.title}
			key={todo.id}
			description={todo.description}
			status={todo.status}
		/>
	));

	return (
		<div>
		<h2 id="list-heading">3 tasks remaining</h2>
		<ul
			className="todo-list stack-large stack-exception"
			aria-labelledby="list-heading">
			{renderTodos(todoList)}
		</ul>
	</div>
	);
}

export default TodoList;