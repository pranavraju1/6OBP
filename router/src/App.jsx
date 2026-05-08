import { BrowserRouter, Route, Routes } from "react-router"

import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import OrderSummary from "./components/OrderSummary"
import NoMatchFound from "./components/NoMatchFound"

import Products from "./components/Products"
import NewProducrts from "./components/NewProducrts"
import FeaturedProducts from "./components/FeaturedProducts"

import Users from "./components/Users"
import Admin from "./components/Admin"
import UserDetails from "./components/UserDetails"





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/order-summary" element={<OrderSummary/>}/>
          
          {/* this is how you define the route of your page that you want to show when user tries to
          access a route that is not defined */}
          <Route path="*" element={<NoMatchFound />}/>

          {/* <Route path="/products" element={<Products/>}/>
          <Route path="/products/new" element={<NewProducrts />}/>
          <Route path="/products/featured" element={<FeaturedProducts/>}/> */}

            {/* this is known as nested routes  NewProducrts and FeaturedProducts are going to be shown 
            inside your products page intead having different pages to them*/}
          <Route path="/products" element={<Products/>}>
            <Route path="new" element={<NewProducrts />}/>
            <Route path="featured" element={<FeaturedProducts/>}/>
          </Route>

          <Route path="/users" element={<Users />} />
          {/* <Route path="/users/1" element={<UserDetails />} />
          <Route path="/users/2" element={<UserDetails />} />
          <Route path="/users/3" element={<UserDetails />} /> */}
          
          {/* Dynamic routing */}
          <Route path="/users/:userId" element={<UserDetails />} />
          
          {/* react router will always give preference to specefic routes */}
          <Route path="/users/admin" element={<Admin />} />



          
            

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
// BrowserRouter -> wraps the app and enables routing
// Routes -> groups all the route definations
// Route -> maps a path to a component

// Note:Why do we need react routing ? -> To amanage navigation on the client side w/o reloading the page
