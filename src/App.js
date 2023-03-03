import { Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers.page";
import Home from './pages/Home.page'
import ProductOne from "./pages/Product-one.page";
import ProductTwo from "./pages/Product-two.page";
import RooyLayOut from "./pages/RootLayOut";
import Users from "./pages/Users.page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<RooyLayOut />} >
        <Route path="home" element={<Home />} />
        <Route path="productOne" element={<ProductOne />} />
        <Route path="productTwo" element={<ProductTwo />} />  
        <Route path="customers" element={<Customers />} />
        <Route index element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
