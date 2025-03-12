import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./components/Header"
import Login from "./components/Login"
import Browser from './components/Browser'; 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Browser' element={<Browser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
