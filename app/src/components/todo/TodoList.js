import React, {useContext, useEffect, useState} from 'react';

import Todo from './Todo';
import { TodoAppContext } from "../../utils/contexts";
import Filters from "./Filters";

function TodoList(props) {
	const { todoList } = useContext(TodoAppContext);
	const context = useContext(TodoAppContext);
	const [renderList, setRenderList] = useState([]);

	const renderTodos = () => todoList.map((todo) => {
		return <Todo
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
			<Filters filteredList={[...todoList]}/>
			<h2 id="list-heading">3 tasks remaining</h2>
			<ul
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{renderList}
			</ul>
	</div>
	);
}

export default TodoList;