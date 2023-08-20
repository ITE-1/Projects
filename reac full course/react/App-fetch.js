import React, {useEffect, useState} from 'react'
import './styles/app.css'
import Wrapper from './components/Wrapper'


const App = () => {

  const [todo, setTodo] = useState(null)
  useEffect(() => {
    console.log('Callback in useEffect called')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.results.json())
    .then(json => setTodo(json))
    console.log(response)
  }, [])
  
  console.log('app rendered 1')
  console.log(todo, console.log('useEffect rendered 2'))
  return (
    
    <div className='container'>
      {todo && <h1>{todo.title}</h1>}
    </div>
  )


}

export default App