import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class='container'>
      <div class='flex items-center'>
        <a href='https://solidjs.com' target='_blank' rel='noreferrer'>
          <img
            src={solidLogo}
            class='object-cover h-12 w-12'
            alt='Solid logo'
          />
        </a>
        <h1 class='text-3xl font-bold'>Vite + Solid</h1>
      </div>
      <div>
        <button
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type='button'
          onClick={() => setCount(count => count + 1)}
        >
          count is {count()}
        </button>
      </div>
    </div>
  )
}

export default App
