//command+Shift+r to refresh the server and see React code Updates

class Board extends React.Component {
  render() {
    return <div>the board!</div>;
  }
}

class Player extends React.Component {
  render() {
    return (
      <div>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1> React Tac Toe </h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
