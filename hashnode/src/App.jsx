import MyNav from './components/MyNav'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
function App() {



  return (
    <>
    <MyNav></MyNav>
    
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
