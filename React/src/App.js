import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Appointments from './Pages/Appointments';
import Register from './Pages/Register';
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Home />} />
          <Route path='/:Comment_id' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/book-an-appointment' element={<Appointments />} />
          {/* enter your routes here */}
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
