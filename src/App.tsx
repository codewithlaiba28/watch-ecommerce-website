import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar.tsx'
import Home from './Pages/Home.tsx'
import Internationalbrands from './Pages/Internationalbrands.tsx'
import Allwatches from './Pages/Allwatches.tsx'
import Men from './Pages/Men.tsx'
import Women from './Pages/Women.tsx'
import Store from './Pages/Store.tsx'
import Smart from './Pages/Smart.tsx'
import Offers from './Pages/Offers.tsx'
import Brands from '../Brands.tsx'
import Contact from './Pages/Contact.tsx'
import Cart from './Pages/Cart.tsx'
import Search from "./Pages/Search.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/internationalbrands' element={<Internationalbrands />} />
        <Route path='/allwatches' element={<Allwatches />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/store' element={<Store />} />
        <Route path='/smart' element={<Smart />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App