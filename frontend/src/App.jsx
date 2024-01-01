import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import ProductPage from "./pages/productPage/ProductPage"
import RecommendProduct from "./pages/productPage/recommendProduct/RecommendProduct"
import Contact from "./components/contact/Contact"
import Gallery from "./components/gallery/Gallery"
import Login from "./pages/dashboard/login/Login"
import Dashboard from "./pages/dashboard/dashboard/Dashboard"
import { useState } from "react"
import PrivateComponent from "./components/privateComponent/PrivateComponent"
import AppContext from "./components/context/AppContext"
import DashHeader from "./pages/dashboard/dashHeader/DashHeader"
import DVerticalHeader from "./pages/dashboard/dVerticalHeader/DVerticalHeader"
import Master from "./pages/dashboard/pagesDashboard/master/Master"
import MasterItemsDisplay from "./pages/dashboard/pagesDashboard/masterHeader/MasterItemsDisplay"
import AddItemsInDashboard from "./pages/dashboard/pagesDashboard/masterHeader/addItemsInDashboard/AddItemsInDashboard"
import "./App.css"
import MasterProductDisplay from "./pages/dashboard/pagesDashboard/masterProductDisplay/MasterProductDisplay"
import AddProducts from "./pages/dashboard/pagesDashboard/masterProductDisplay/addProducts/AddProducts"

function App() {

  const [check, setcheck] = useState(false)

  const dashboardToggle = (value) => {
    setcheck(value);
  }

  const [toggleMenu, setToggleMenu] = useState(true)

  const toggleMenuHandle = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>

      <AppContext>

        {
          !check ?
            <Header />
            :
            <>
              <DashHeader toggleMenuHandle={toggleMenuHandle} toggleMenu={toggleMenu} />
              <DVerticalHeader />
            </>
        }

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/items' element={<RecommendProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="/product/:title" element={<ProductPage />} />
          <Route path='/dashboard/login' element={<Login dashboardToggle={dashboardToggle} />} />

          <Route path='*' element={<Home />} />




          <Route element={<PrivateComponent />}>

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/master' element={<Master />} />
            <Route path='/dashboard/:title' element={<MasterItemsDisplay />} />
            <Route path='/dashboard/add/:title' element={<AddItemsInDashboard />} />
            <Route path='/dashboard/carousel' element={<Dashboard />} />
            <Route path='/dashboard/product' element={<MasterProductDisplay />} />
            <Route path='/dashboard/addproduct' element={<AddProducts />} />

          </Route>





        </Routes>



        {
          !check ?
            <Footer />
            : ""
        }

      </AppContext>

    </>
  )
}

export default App
