import React, { useContext, useState } from 'react';

import Todo from './Todo';
import { TodoAppContext } from "../../utils/contexts";
import Filters from "./Filters";

function TodoList(props) {
	const { todoList } = useContext(TodoAppContext);
	const [ renderList, setRenderList ] = useState([...todoList]);

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
			<Filters setList={setRenderList}/>
			<h2 id="list-heading">3 tasks remaining</h2>
			<ul
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{renderTodos(renderList)}
			</ul>
	</div>
	);
}

export default TodoList;