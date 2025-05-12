
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Todo from './pages/Todo';
import All from './components/All/AllList';
import Active from './components/Active/Active';
import Completed from './components/Completed/Completed';

function App() {

  return (
    <div className='w-screen h-screen p-4 m-0 p-0 flex justify-center bg-gray-400'>
      <Routes>
        <Route path='/' element={<Todo />} >
          <Route index element={<All />} />
          <Route path='all' element={<All />} />
          <Route path='active' element={<Active />} />
          <Route path='completed' element={<Completed />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
