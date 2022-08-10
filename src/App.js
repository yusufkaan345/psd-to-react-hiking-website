import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div >
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='menu' element={ <Menu />}/>
            <Route path='contact-us' element={ <ContactUs />}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
