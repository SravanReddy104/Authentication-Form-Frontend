
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import SignUp from "./Authentication/Signup"
import About from "./Screens/About";
import Login from './Authentication/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile/:profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
