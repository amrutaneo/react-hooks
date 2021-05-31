import { createContext } from 'react';
import './App.css';
import HookCounter from "./components/HookCounter"
import HookCounterTwo from './components/HookCounterTwo';
import UseReducerHook from './components/UseReducerHook';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';

export const userContext = createContext()

function App() {
  return (
    <div className="App">
       <h1>Context API and UseEffect hook</h1>
      <userContext.Provider value={"Amruta"}>
      <HookCounter/>
      </userContext.Provider>

      <h1>useState hook</h1>

      <HookCounterTwo/>

      <h1>useReducer hook</h1>
      <UseReducerHook/>

      {/* <h1>use callback hook</h1> */}
      <ParentComponent/>

      <h1>useMemo hook</h1>
      <Counter/>

    </div>
  );
}

export default App;
