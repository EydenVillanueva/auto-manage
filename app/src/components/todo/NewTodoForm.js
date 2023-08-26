import React, { useContext } from 'react';
import { TodoAppContext } from "../../utils/contexts";
import { Formik, Form, Field, ErrorMessage } from 'formik';


function NewTodoForm() {
	const { setTodoList } = useContext(TodoAppContext);

	return (
		<div>
			<Formik
				initialValues={{ title: "", description: "" }}
				validate={ values => {
					const errors = {};
					if(!values.title) {
						errors.title = "Required"
					}
					if(values.title.length < 3){
						errors.title = "Should be longer than 3 characters"
					}
					if(!values.description){
						errors.description = "Required";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTodoList((list) => {
						return [{
							id: values.title,
							...values,
							status: 'active'
						}, ...list];
					});
					resetForm({values: ''})
					setTimeout(() => {
						setSubmitting(false);
					}, 400)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field
							type="text"
							name="title"
							className="input input__lg"
							id="new-todo-input"
							autoComplete="off"
							placeholder="task title"
						/>
						<ErrorMessage name="title" component="div"/>
						<Field
							type="text"
							name="description"
							className="input input__lg"
							id="new-todo-input"
							autoComplete="off"
							placeholder="task description"
						/>
						<ErrorMessage name="description" component="div"/>
						<button type="submit" className="btn toggle-btn" disabled={isSubmitting}>
							Create
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default NewTodoForm;