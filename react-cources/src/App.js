import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './Context';



function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, completed: false, title: 'Купить хлеб' },
    { id: 1, completed: false, title: 'Купить лимонад' },
    { id: 2, completed: true, title: 'Купить чупик' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => (todo.id !== id)));//скобки (todo.id !== id) позволяют вернуть true или false, но на самом деле в стрелочной функции и без круглых скобок происходит return... Но вот если поставить скобки {} тогда надо return писать явно...
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>{/* или можно сократить запись из-за одинаковых ключей и значений {removeTodo} */}
      <div className="wrapper">
        <h1>Hello!</h1>

        <TodoList todos={todos} onToggleTodo={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
