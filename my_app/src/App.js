import Hello from './components/Hello';
import Myclass from './components/Myclass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import UseReducer from './components/UseReducer';
import './App.css';
import React from 'react';


export const MyContext = React.createContext()

function App() {

  function clicked() {
    alert('ive been clicked')
  }

  return (
    <div className='container'>
      <UseReducer/>
      <CounterHook/>
      <Counter/>
      <Hello name='David Amajuoyi' />
      <Myclass email='amajuoyichideradavid@gmail.com' myclick = {clicked} />
      <Name/>
      <Example names = {['python', 'java', 'javascript', 'c#', 'c++']} />
      <Example2 names = {['react', 'django', 'react native', 'flask']} />
      <Form/>
      
      <MyContext.Provider value='this is a context value'>
      <ComponentA/>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
