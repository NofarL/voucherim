import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
// Components.
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages.
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Faq from './pages/Faq/Faq';
import Thanks from './pages/Thanks/Thanks';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/thanks" component={Thanks} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
