import React, { useState }  from 'react';
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getDiceNumber(){
  return getRandomInt(5) +1;
}

function App() {
  
  const [playerNumber, setPlayerNumber] = useState(1);
  const [enemyNumber, setEnemyNumber] = useState(getDiceNumber);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {setPlayerNumber(playerNumber + 1);setEnemyNumber(getDiceNumber)}}>
          あなたの手は{playerNumber}です。
        </button>
        <p>
          私の手は{enemyNumber}です。
        </p>
      </header>
    </div>
  );
}

export default App;
