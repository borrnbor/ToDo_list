import React from 'react';
import { useState } from 'react';
import ToDoItem from '../Homes/item/ToDoItem';
import CreateTodoField from '../Homes/create-todo-field/CreateTodoField';

const data = [
  // {
  //   _id: 'vqvw434',
  //   title: 'Finish the essay collaboration',
  //   isComplited: false,
  // },
  // {
  //   _id: 'vdsv45tg',
  //   title: 'Read next chapter of the book',
  //   isComplited: false,
  // },
  // {
  //   _id: 'vdsve534v',
  //   title: 'Send the finished assigment',
  //   isComplited: false,
  // },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2x1 font-bold text-center mb-4">ToDo</h1>
      <CreateTodoField setTodos={setTodos} />
      {todos.map((todo) => (
        <ToDoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
