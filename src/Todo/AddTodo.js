import React, { useState } from "react";
import PropTypes from 'prop-types';



function useInputValue(defValue = '') {
  const [value, setValue] = useState(defValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}



function AddTodo({ createTodo }) {
  const input = useInputValue('');

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      createTodo(input.value());
      input.clear();
      // setValue('');
    }
  }

  return (
    <form style={{ margin: '1rem' }} onSubmit={submitHandler}>
      <input
        {...input.bind}//оператор Spread
      // value={value} 
      // onChange={event => setValue(event.target.value)} 
      />
      <button type="submit">Add todo</button>
    </form>
  );
}



AddTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
}



export default AddTodo;