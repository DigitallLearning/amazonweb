import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Electronics from "./Electronics";
import Mobile from "./Mobile";
function Routing()
{
    return(
   <div>
    <BrowserRouter>
   <Nav></Nav>
   <br></br>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/electronics" element={<Electronics></Electronics>}></Route>
    <Route path="/mobile" element={<Mobile></Mobile>}></Route>
  </Routes>
  
</BrowserRouter>

   </div>
   
    )
}
export default Routing