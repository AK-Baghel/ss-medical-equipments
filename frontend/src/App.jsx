import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import ProductPage from "./pages/productPage/ProductPage"
// import RecommendTile from "./pages/productPage/recommendTile/RecommendTile"
import RecommendProduct from "./pages/productPage/recommendProduct/RecommendProduct"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items' element={<RecommendProduct />} />
        <Route path="/product/:title" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
