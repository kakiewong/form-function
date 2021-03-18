import './App.css';
import { ContextProvider } from './ContextProvider'
import Header from './Components/Header/Header'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
      </div>
    </ContextProvider>
  );
}

export default App;
