import React, {useContext, useEffect, useState} from 'react';
import {TodoAppContext} from "../../utils/contexts";

function Filters(props) {

	const { setList } = props;
	const { todoList } = useContext(TodoAppContext);
	const [currentFilter, setCurrentFilter] = useState('all');

	// const type = e.target.textContent;

	useEffect(() => {
		if(currentFilter === 'all'){
			setList(todoList);
			return;
		}
		setList(
			todoList.filter((item) => {
				if (currentFilter === item.status) return item;
			})
		);
	}, [currentFilter]);

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