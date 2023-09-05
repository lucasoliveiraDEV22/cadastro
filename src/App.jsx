import Router from "./routes/routes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Containers/Home";
import Users from "./Containers/Users"

const App = () => {


  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
    </Routes>
    </BrowserRouter>
  
  </>

}

export default App