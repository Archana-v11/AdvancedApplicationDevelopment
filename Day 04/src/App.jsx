import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './pages/About'
import Billing from './pages/Billing'
import Booking from './pages/Booking'

import Contact from './pages/Contact'
import Diamond from './pages/Diamond'
import Gold from './pages/Gold'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Platinum from './pages/Platinum'
import Silver from './pages/Silver'
import Success from './pages/Success'
import Themes from './pages/Themes'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Service from './pages/Service';
import Userinfo from './pages/Userinfo';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import Service5 from './pages/Service5';
import Decoration from './pages/Decoration';
import Terms from './pages/Terms';



function App() {
  

  return (
    
    <Routes>

    <Route path='/admin/dashboard' element={<Dashboard/>}/>
    <Route path='/admin/side' element={<Sidebar/>}/>
    <Route path="/decor" element={<Decoration/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/service2" element={<Service2/>}/>
    <Route path="/service3" element={<Service3/>}/>
    <Route path="/service4" element={<Service4/>}/>
    <Route path="/service5" element={<Service5/>}/>
    <Route path="/admin/user" element={<Userinfo/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/billing" element={<Billing/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/diamond" element={<Diamond/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/gold" element={<Gold/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/packages" element={<Packages/>}/>
    <Route path="/platinum" element={<Platinum/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/silver" element={<Silver/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/themes" element={<Themes/>}/>
    </Routes>
    
  )
}

export default App