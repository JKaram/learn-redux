import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'



function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      {counter}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      {isLoggedIn ? 'True' : 'False'}
    </div>
  );
}

export default App;
