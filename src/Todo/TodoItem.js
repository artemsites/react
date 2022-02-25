import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import Context from '../Context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
  },
  input: {
    marginRight: '.5rem',
  },
  button: {
    marginLeft: '.5rem',
  }
}

function TodoItem({ todo, id, title, index, toggleTodo }) {//{todo} это (деструктуризация объекта) сокращённая запись чтобы взять сразу свойство объекта props.todo

  const {removeTodo} = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push('--done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          checked={todo.completed}
          type="checkbox"
          style={styles.input}
          onChange={() => {
            toggleTodo(id)
          }} />
        <strong>{++index}</strong>
        {title}
      </span>
      <button
        style={styles.button} 
        onClick={()=>removeTodo(id)}//первый вариант вызвать колбэком функцию removeTodo()
        // Or: 
        // onClick={removeTodo.bind(null, id)}//второй вариант создать новую функцию с контекстом = null и передаём id параметром
        >&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
}

export default TodoItem;