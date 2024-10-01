import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from"./pages/Contact";

import NoPage from "./pages/NoPage";
import AboutCompany from "./pages/AboutCompany";
import AboutProduct from "./pages/AboutProduct";



const App=()=>{
  return(
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} /> 
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
          <Route path="aboutCompany" element={<AboutCompany/>} />
          <Route path="aboutProduct" element={<AboutProduct/>} />
          

          </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;



