import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/' element={<About/>}></Route>
      <Route path='/' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
