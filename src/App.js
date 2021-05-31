import { createContext } from 'react';
import './App.css';
import HookCounter from "./components/HookCounter"
import HookCounterTwo from './components/HookCounterTwo';
import UseReducerHook from './components/UseReducerHook';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
// import DocTitle from './components/DocTitle';

export const userContext = createContext()

function App() {
  return (
    <div className="App">
       <h1>Context API and UseEffect hook and Custom Hook</h1>
      <userContext.Provider value={"Amruta"}>
      <HookCounter/>
      </userContext.Provider>
      {/* <DocTitle/> */}

      <h1>useState hook</h1>

      <HookCounterTwo/>

      <h1>useReducer hook</h1>
      <UseReducerHook/>

      {/* <h1>use callback hook</h1> */}
      <ParentComponent/>

      <h1>useMemo hook</h1>
      <Counter/>

      <h1>useRef hook</h1>
      <FocusInput/>
      <br/>

    </div>
  );
}

export default App;
