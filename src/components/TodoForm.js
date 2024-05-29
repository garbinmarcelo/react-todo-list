import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TodoFormSchema } from '../validation/Todo';

export const TodoForm = ({ addTodo }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    addTodo(values.todo);
    setSubmitting(false);
    resetForm();
  };

  return (
      <Formik
          initialValues={{ todo: '' }}
          onSubmit={handleSubmit}
          validationSchema={TodoFormSchema}
      >
        {({ errors, touched }) => (
            <Form className="TodoForm mb-5">
              <div className="input-group">
                <Field
                    type="text"
                    name="todo"
                    className={`form-control ${errors.todo && touched.todo ? 'is-invalid' : ''}`}
                    placeholder="O que temos para hoje?"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Adicionar
                </button>
              </div>
              <ErrorMessage name="todo" component="small" className="text-danger" />
            </Form>
        )}
      </Formik>
  );
};
