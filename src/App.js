import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    <Grid container direction="column" xs="{12}" align="center" justify="center">
    <Grid container item xs="{12}" align="center" justify="center">
    {[1,2,3,4,5,6].map((n) => <Grid item xs="{2}"><PlayButton number={n} setPlayerNumber={setPlayerNumber} setEnemyNumber={setEnemyNumber}/> </Grid>)}
    </Grid>
    <Grid item xs="{12}">
      <Typography variant="body1" align="center">
        あなたの手は{playerNumber}です。<br />
        私の手は{enemyNumber}です。<br />
        したがって,
      </Typography>
    </Grid>
    <Grid item xs="{12}">
      <GameResult playerNumber={playerNumber} enemyNumber={enemyNumber} />
    </Grid>
    </Grid>
      </body>
    </React.Fragment>
  );
}

export default App;
