import React, { useEffect } from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './Context';
// import AddTodo from './Todo/AddTodo';
import Loader from './Loader';
import Modal from './Modal/Modal';

// Ленивый компонент lazy
const AddTodo = React.lazy(() => import('./Todo/AddTodo'));



function App() {
  const [todos, setTodos] = React.useState([
    // { id: 0, completed: false, title: 'Купить хлеб' },
    // { id: 1, completed: false, title: 'Купить лимонад' },
    // { id: 2, completed: true, title: 'Купить чупик' },
  ]);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 1000);
      })
  }, []);//[]-список зависимостей

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

  function createTodo(value) {
    setTodos(todos.concat([{
      title: value,
      id: Date.now(),
      completed: false,
    }]));
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>{/* или можно сократить запись из-за одинаковых ключей и значений {removeTodo} */}
      <div className="wrapper">
        <h1>Hello!</h1>

        <Modal />

        <React.Suspense fallback={<p>Loading...</p>}>{/* - это для подгрузки ленивого компонента <AddTodo/> (lazy) */}
          <AddTodo createTodo={createTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? <TodoList todos={todos} onToggleTodo={toggleTodo} /> : (loading ? null : <p>No Todos</p>)}

      </div>
    </Context.Provider>
  );
}



export default App;
