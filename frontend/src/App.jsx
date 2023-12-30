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

import "./App.css"
import MasterHeader from "./pages/dashboard/pagesDashboard/masterHeader/MasterHeader"

function App() {

  const [check, setcheck] = useState(false)

  const dashboardToggle = (value) => {
    setcheck(value);
  }

  const [toggleMenu, setToggleMenu] = useState(true)

  // const checkLogin = () => {
  //   setChecking(false)
  // }

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

          <Route element={<PrivateComponent />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/master' element={<Master />} />
            <Route path='/dashboard/header' element={<MasterHeader />} />
            <Route path='/dashboard/carousel' element={<Dashboard />} />
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
