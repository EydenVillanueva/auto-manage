import React, {useContext, useEffect, useState} from 'react';
import {TodoAppContext} from "../../utils/contexts";
import todo from "./Todo";

function Filters(props) {
	const { todoList, setTodoList } = useContext(TodoAppContext);
	const [currentFilter, setCurrentFilter] = useState('all');
	const [filteredList, setFilteredList] = useState([...todoList]);

	useEffect(() => {
		debugger;
		if(currentFilter === 'all'){
			setTodoList([...filteredList]);
			return;
		}
		setTodoList(
			filteredList.filter((item) => {
				if (currentFilter === item.status) return item;
			})
		);
	}, [currentFilter]);

	useEffect(() => {
		if(currentFilter === 'all' && filteredList.length !== todo.length)
			setFilteredList([...todoList]);
	}, [todoList]);

	return (
		<div className="filters btn-group stack-exception">
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => setCurrentFilter('all')}
			>
				all
			</button>
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => setCurrentFilter('active')}
			>
				active
			</button>
			<button
				type="button"
				className="btn toggle-btn"
				onClick={(e) => setCurrentFilter('completed')}
			>
				completed
			</button>
		</div>
	);
}

export default Filters;