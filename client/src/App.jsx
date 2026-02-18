import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';
import AdminLogin from './pages/AdminLogin';
import ComplaintPage from './pages/ComplaintPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/submit' element={<Submit />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin' element={<ComplaintPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
