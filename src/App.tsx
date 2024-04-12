import { createSignal, createEffect } from 'solid-js'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 4;
  createEffect(() => {
    console.log(doubleCount());
  })
  return (
    <>
      <main >
        <h1>Hello</h1>
        <button class='my-2 text-red-500' onClick={() => setCount(count() + 1)}>Increment Count</button>
        <p>{count()} : {doubleCount()}</p>
      </main>
      <footer>
        <strong><a href="/chat">Go to chat</a></strong>
      </footer>
    </>
  )
}

export default App
