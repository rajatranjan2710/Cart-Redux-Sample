import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import './styles/app.css'



function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  
  </BrowserRouter>
    
    
  
}

export default App;
