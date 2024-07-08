import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Shop from './shop/shop';
import Cart from './cart/cart';
import Nav from './components/nav';
import {ShopContextProvider} from './context/shopContext-context'
import { SliderImage } from './components/slider';

function App() {


  return (
    <>
     <div className="App">
      <ShopContextProvider>
       <Router>
         <Nav />
         <SliderImage/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path='/' element={<SliderImage/>}/>
          <Route path="/cart" element={<Cart />}  />
        </Routes>
        
       </Router>
       </ShopContextProvider>
    </div>
    </>
  )
}

export default App
