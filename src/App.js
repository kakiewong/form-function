import './App.css';
import { ContextProvider } from './ContextProvider'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Showcase from './Components/Showcase/Showcase'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Nav />
        <Showcase />
      </div>
    </ContextProvider>
  );
}

export default App;
