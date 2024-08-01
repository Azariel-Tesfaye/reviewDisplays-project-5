import { useState } from 'react'
import './App.css'
import Review from './Section/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Review />
    </section>
  )
}

export default App
