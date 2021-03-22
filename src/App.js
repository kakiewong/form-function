import './App.css';
import { ContextProvider } from './ContextProvider'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Showcase from './Components/Showcase/Showcase'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Nav />
        <Showcase />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
