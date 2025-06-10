import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [mutliplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + mutliplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(mutliplier * 2);
      setCount(count - 10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(mutliplier * 5);
      setCount(count - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(mutliplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count} </h2>
        <img className='samosa'src='https://helpful-griffin-0a0ba5.netlify.app/samosa.png' alt="an img of a samosa" onClick={updateCount} />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯</h3>
          <p>2x per Click</p>
          <button onClick={buyDoubleStuffed}>10 Samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per Click</p>
          <button onClick={buyPartyPack}>100 Samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 🧑‍🍳</h3>
          <p>10x per Click</p>
          <button onClick={buyFullFeast}>1000 Samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App