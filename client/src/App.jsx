import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/submit' element={<Submit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
