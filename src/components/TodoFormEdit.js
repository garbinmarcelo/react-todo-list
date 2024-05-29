import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TodoFormSchema } from '../validation/Todo';

export const TodoFormEdit = ({updateTodo, todo}) => {

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    updateTodo(todo.id, values.todo);
    setSubmitting(false);
    resetForm();
  };

  return (
      <Formik
          initialValues={{ todo: todo.task }}
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
                <button className="btn btn-outline-success" type="submit">
                  Atualizar
                </button>
              </div>
              <ErrorMessage name="todo" component="small" className="text-danger" />
            </Form>
        )}
      </Formik>
  );
};