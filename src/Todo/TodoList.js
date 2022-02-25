import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem toggleTodo={props.onToggleTodo} todo={todo} title={todo.title} key={todo.id} id={todo.id} index={index} />
      })}
    </ul>
  );
}

TodoList.propTypes = {
  onToggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
  // todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;