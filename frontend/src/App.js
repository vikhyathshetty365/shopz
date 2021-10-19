
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer'
import Home from './components/Home.js'
import { BsFillMouseFill } from 'react-icons/all';


import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Home />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
