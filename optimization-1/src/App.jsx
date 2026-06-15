import React, { Suspense, useState } from "react"
// import HomePage from "./components/HomePage"
// import AboutPage from "./components/AboutPage"
// import ContactPage from "./components/ContactPage"
const HomePage = React.lazy(()=>import("./components/HomePage"));
const AboutPage = React.lazy(()=>import("./components/AboutPage"));
const ContactPage = React.lazy(()=>import("./components/ContactPage"));




import { BrowserRouter, Link, Route, Routes } from "react-router"

// import ParentWithoutCallback from "./components/ParentWithoutCallback"
// import LaggyApp from "./components/LaggyApp"


// import ChartPage from "./components/ChartPage"

// const ChartPage = React.lazy(()=>import("./components/ChartPage"))

// function HomePage(){
//   return <h2>Home Page</h2>
// } 

const App = () => {
  // const [showCharts, setShowCharts] = useState(false);
  return (
    <div>
      {/* <LaggyApp/>       */}
      {/* <ParentWithoutCallback/> */}

      {/* <h1>React.lazy Demo</h1>
      <button onClick={()=>setShowCharts(s => !s)}>
        {showCharts ? "Hide Charts" : "Show Charts"}
      </button>

      {showCharts ? (
        <Suspense fallback={<p>Loading component</p>}>
          <ChartPage/>
        </Suspense>
        ):(<HomePage/>)} */}

        
        <BrowserRouter>
        
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/about'>About</Link>
          <br />
          <Link to='/contact'>Contact</Link>
        </nav>
        <Suspense fallback={<h3>Loading Element...</h3>}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </Suspense>
        </BrowserRouter>




    </div>
  )
}

export default App
