import { createSignal, createEffect } from 'solid-js'
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
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
      <Router root={props => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
    </>
  )
}

export default App
