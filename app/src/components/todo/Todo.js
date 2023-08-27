import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { TodoAppContext } from "../../utils/contexts";
import { updateTaskStatus } from "../../api/api";

const Todo = props => {
	const { id, title, description, status } = props;
	const { setTodoList } = useContext(TodoAppContext);

	const handleChecked = async (id, e) => {
		const status = e.target.checked ? "completed" : "active";
		await updateTaskStatus(id, status);
		setTodoList((list) => {
			return list.map( item => {
				if(item.id === id) item.status = status;
				return item;
			});
		});
	}

	return (
		<li key={`${title}-${id}`} className="todo stack-small">
			<div className="c-cb">
				<input
					type="checkbox"
					defaultChecked={status === "completed"}
					onChange={(e) => handleChecked(id, e)}
				/>
				<label className="todo-label" htmlFor="todo-0">
					{title}
				</label>
				<p>
					{description}
				</p>
			</div>
			<div className="btn-group">
				<button type="button" className="btn">
					Edit <span className="visually-hidden">{title}</span>
				</button>
				<button type="button" className="btn btn__danger">
					Delete <span className="visually-hidden">{title}</span>
				</button>
			</div>
		</li>
	);
};

Todo.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	status: PropTypes.string,
};

export default Todo;