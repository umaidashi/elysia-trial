import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import { eden } from 'eden'

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState<
    { title: string; id: number; description: string; status: string }[]
  >([])

  const fetch = async () => {
    const { data } = await eden.todos.index.get()
    setTodos(data ?? [])
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button type='button' onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  )
}

export default App
