
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer'
import Home from './components/Home.js'
import Contacts from './components/Contacts.js'
import Productsearch from './components/Product/Productsearch.js'
import ProductDescription from './components/Product/ProductDescription.js'
import Products from './components/Product/Products.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contacts} />
          <Route exact path="/productdetails/:id" component={ProductDescription} />
          <Route exact path="/search" component={Productsearch} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:keyword" component={Products} />
        </Switch>


        <Footer />
      </Router>

    </div>
  );
}

export default App;
