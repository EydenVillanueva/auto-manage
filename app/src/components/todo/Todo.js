import React, { useContext } from 'react';
import PropTypes from "prop-types";
import {TodoAppContext} from "../../utils/contexts";

const Todo = props => {
	const { id, title, description, status } = props;
	const { setTodoList } = useContext(TodoAppContext);
	const handleChecked = (e) => {
		console.log(e);
	}

	return (
		<li key={id} className="todo stack-small">
			<div className="c-cb">
				<input
					id="todo-0"
					type="checkbox"
					defaultChecked={status === "completed"}
					onChange={(e) => handleChecked(e)}
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