import React, { useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getDiceNumber(){
  return getRandomInt(6) +1;
}

function GameResult(props){
  switch (props.playerNumber - props.enemyNumber){
    case 1:
    case -5: //5は6対1用
      return <p class="Game"> あなたの勝ちです </p>;
      break;
    case -1:
    case 5:
      return <p class="Game"> わたしの勝ちです </p>;
      break;
    default:
      return <p class="Game"> おあいこです </p>;
  }
}

function PlayButton(props){
  return(
    <Button onClick={() => {props.setPlayerNumber(props.number);props.setEnemyNumber(getDiceNumber)}}>
      {props.number}
    </Button>);
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
