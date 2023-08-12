import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

TodoList.propTypes = {
	todoList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		description: PropTypes.string,
	})),
};

function TodoList(props) {
	const { todoList } = props;

	const renderTodos = (todos) => todos.map((todo) => (
		<Todo title={todo.title} id={todo.id} description={todo.description} />
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