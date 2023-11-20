import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import Menu from "./components/Menu/index";
import Menus from "./components/Menus/index"
import Order from "./components/Order/index";
import Orders from "./components/Orders/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
