import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          TODO App
        </h1>
        
        {/* AddTodo Component */}
        <AddTodo className="mb-4"/>

        {/* Todo List */}
        <Todo/>

        
      </div>
    </div>
    </>
  )
}

export default App
