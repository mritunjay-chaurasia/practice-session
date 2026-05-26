import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './slice/todoSlice'
import './App.css'
import ScreenSize from './ScreenSize'
import InfiniteScroller from './InfiniteScroller'

function App() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addtodo(text))
    setText("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter todo' value={text} onChange={(e) => setText(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
      {/* <ScreenSize /> */}
      <InfiniteScroller />
    </>
  )
}

export default App
