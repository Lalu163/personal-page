import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Portfolio/>
        <Contact/>
    </div>
  );
}

export default App;
