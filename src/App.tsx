import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Internationalbrands from './pages/Internationalbrands'
import Allwatches from './pages/Allwatches'
import Men from './pages/Men'
import Women from './pages/Women'
import Store from './pages/Store'
import Smart from './pages/Smart'
import Offers from './pages/Offers'
import Brands from './pages/Brands'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Search from "./pages/Search"
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
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
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App