import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import './App.css';
import Navba from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navba/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<Home />} path='/home' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<About />} path='/about' />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
