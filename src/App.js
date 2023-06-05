import './App.css';
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import MenuCoffee from './pages/MenuCoffee';
import MenuSnack from './pages/MenuSnack';
import MenuOthers from './pages/MenuOthers';
import MenuMainCourse from './pages/MenuMainCourse';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/menucoffee" element={<MenuCoffee/>} />
        <Route path="/menusnack" element={<MenuSnack/>} />
        <Route path="/menuothers" element={<MenuOthers/>} />
        <Route path="/menumaincourse" element={<MenuMainCourse/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
