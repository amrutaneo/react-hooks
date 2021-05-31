import { createContext } from 'react';
import './App.css';
import HookCounter from "./components/HookCounter"
import HookCounterTwo from './components/HookCounterTwo';

export const userContext = createContext()

function App() {
  return (
    <div className="App">
      <userContext.Provider value={"Amruta"}>
      <HookCounter/>
      </userContext.Provider>

      <HookCounterTwo/>
    </div>
  );
}

export default App;
