import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css'
import Login from "./components/Login";
import Body from "./components/Body";
import Browser from './components/Browser'; 
import { Provider } from 'react-redux';
import store from "./utils/appStore";

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/browser' element={<Browser/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
