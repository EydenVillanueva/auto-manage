import React, {useContext, useEffect, useState} from 'react';

import Todo from './Todo';
import { TodoAppContext } from "../../utils/contexts";
import Filters from "./Filters";

function TodoList(props) {
	const { todoList } = useContext(TodoAppContext);
	const [renderList, setRenderList] = useState([]);

	const renderTodos = () => todoList.map((todo) => {
		return <Todo
			id={todo.id}
			title={todo.title}
			key={todo.id}
			description={todo.description}
			status={todo.status}
		/>
	});

	useEffect(() => {
		setRenderList(renderTodos());
	}, [todoList]);

	return (
		<div>
			<Filters />
			<h2 id="list-heading">3 tasks remaining</h2>
			<ul
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{ renderList.length ?
					renderList
					:
					<p>Nothing to see here...</p>
				}
			</ul>
	</div>
	);
}

export default TodoList;