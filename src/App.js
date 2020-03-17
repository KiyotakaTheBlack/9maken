import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
      return <Typography variant="body1" align="center"> あなたの勝ちです </Typography>;
      break;
    case -1:
    case 5:
      return <Typography variant="body1" align="center"> わたしの勝ちです </Typography>;
      break;
    default:
      return <Typography variant="body1" align="center"> おあいこです </Typography>;
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
    <React.Fragment>
      <CssBaseline />
      <body>
        <Box align="center">
          <ul>
            {[1,2,3,4,5,6].map((n) => <PlayButton number={n} setPlayerNumber={setPlayerNumber} setEnemyNumber={setEnemyNumber} />)}
          </ul>
          <Typography variant="body1" align="center">
            あなたの手は{playerNumber}です。<br />
            私の手は{enemyNumber}です。<br />
            したがって,
          </Typography>
          <GameResult playerNumber={playerNumber} enemyNumber={enemyNumber} />
        </Box>
      </body>
    </React.Fragment>
  );
}

export default App;
