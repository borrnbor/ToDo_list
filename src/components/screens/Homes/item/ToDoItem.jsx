import React from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';

const ToDoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button
        className="flex items-center"
        onClick={() => changeTodo(todo._id)}
      >
        <Check isComplited={todo.isComplited} />
        <span className={`${todo.isComplited ? 'line-through' : ''}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default ToDoItem;
