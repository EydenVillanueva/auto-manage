import React from 'react';
import { Formik, Form, Field } from 'formik';


function NewTodoForm() {
	return (
		<div>
			<Formik
				initialValues={{ title: "", description: "" }}
				validate={ values => {
					const errors = {};
					if(!values.title) {
						errors.title = "Required"
					}
					if(!values.title.length < 3){
						errors.title = "Should be longer than 3 characters"
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
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
						/>
						<button type="submit" className="btn" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default NewTodoForm;