import React, {useContext} from 'react';
import {TodoAppContext} from "../../utils/contexts";

function Filters(props) {

	// const { todoList, setTodos } = props;
	const {todoList, setTodoList} = useContext(TodoAppContext);

	const handleFilter = (e) => {
		const type = e.target.textContent;
		const filteredTodos = todoList.filter(todo => {
			if(type === 'all') return todo;
			else if(type === todo.status) return todo;
		})
		setTodoList(filteredTodos);
	}

	return (
		<div className="filters btn-group stack-exception">
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => handleFilter(e)}
			>
				all
			</button>
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => handleFilter(e)}
			>
				active
			</button>
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => handleFilter(e)}
			>
				completed
			</button>
		</div>
	);
}

export default Filters;