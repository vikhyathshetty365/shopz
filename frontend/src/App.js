
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer'
import Home from './components/Home.js'
import Contacts from './components/Contacts.js'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contacts} />

        </Switch>


        <Footer />
      </Router>

    </div>
  );
}

export default App;
