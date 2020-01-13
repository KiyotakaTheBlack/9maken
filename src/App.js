import React, { useState }  from 'react';
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getDiceNumber(){
  return getRandomInt(5) +1;
}

function GameResult(props){
  switch (props.playerNumber - props.enemyNumber){
    case 1:
      return <p class="Game"> あなたの勝ちです </p>;
      break;
    case -1:
      return <p class="Game"> わたしの勝ちです </p>;
      break;
    default:
      return <p class="Game"> おあいこです </p>;
  }
}

function PlayButton(props){
  return(
    <button onClick={() => {props.setPlayerNumber(props.number);props.setEnemyNumber(getDiceNumber)}}>
      {props.number}
    </button>);
}

function App() {
  
  const [playerNumber, setPlayerNumber] = useState(1);
  const [enemyNumber, setEnemyNumber] = useState(getDiceNumber);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {[1,2,3,4,5,6].map((n) => <PlayButton number={n} setPlayerNumber={setPlayerNumber} setEnemyNumber={setEnemyNumber} />)}
        </ul>
          <p  class="Game">
          あなたの手は{playerNumber}です。<br />
          私の手は{enemyNumber}です。<br />
          したがって,
        </p>
        <GameResult playerNumber={playerNumber} enemyNumber={enemyNumber} />
      </header>
    </div>
  );
}

export default App;
