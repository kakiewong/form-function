import './App.css';
import { ContextProvider } from './ContextProvider'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Showcase from './Components/Showcase/Showcase'
import Footer from './Components/Footer/Footer'
import ProductPage from './Components/ProductPage/ProductPage'
import About from './Components/Legal/About'
import Careers from './Components/Legal/Careers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/"><Showcase /></Route>
            <Route path="/shop/:category"><ProductPage /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/careers"><Careers /></Route>
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
