import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import ProductPage from "./pages/productPage/ProductPage"
// import RecommendTile from "./pages/productPage/recommendTile/RecommendTile"
import RecommendProduct from "./pages/productPage/recommendProduct/RecommendProduct"
import Contact from "./components/contact/Contact"
import Gallery from "./components/gallery/Gallery"




function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items' element={<RecommendProduct />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/product/:title" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
