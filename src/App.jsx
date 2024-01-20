import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './route/Routing'
import CounterFun from './components/counter/CounterFun'
import ToDoList from './components/todolist/ToDoList'
import AddImage from './components/addimage/AddImage'
import FilterData from './components/filterpaginationsorting/FilterData'
import NewToDoList from './components/todolist/NewToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routing/> */}
      {/* <CounterFun/> */}
      {/* <ToDoList/> */}
      {/* <AddImage/> */}
      <FilterData/>
      {/* <NewToDoList/> */}
    </>
  )
}

export default App
