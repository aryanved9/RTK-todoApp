import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleTodoComplete } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editId, setEditId] = useState(null)
  const [newText, setNewText] = useState('')

  const handleUpdateClick = (todo) => {
    setEditId(todo.id)
    setNewText(todo.text)
  }

  const handleUpdateSubmit = () => {
    dispatch(updateTodo({ id: editId, text: newText }))
    setEditId(null)
    setNewText('')
  }

  const handleToggleComplete = (todo) => {
    dispatch(toggleTodoComplete(todo.id));
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              todo.completed ? 'bg-green-300' : 'bg-zinc-200'
            }`}
            key={todo.id}
          >
            {editId === todo.id ? (
              <>

                {/* HandleSubmit */}
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={handleUpdateSubmit}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>

              </>
            ) : (

              <>
                {/* Todo completed */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo)}
                    className="mr-2 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className={`text-black ${todo.completed ? 'line-through' : ''}`}>
                    {todo.text}
                  </span>
                </div>

                {/* update  */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdateClick(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 3.487l3.651 3.651c.548.547.548 1.434 0 1.982l-9.196 9.196a1.5 1.5 0 01-.947.438l-3.362.375c-.869.097-1.61-.644-1.512-1.512l.375-3.362a1.5 1.5 0 01.438-.947l9.196-9.196a1.5 1.5 0 011.982 0zM10 20.25h8.25"
                      />
                    </svg>
                  </button>

                  {/* delete or remove todo */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo;