//command+Shift+r to refresh the server and see React code Updates
// hhtp-server -o

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <br />
//         <h3>Dashboard</h3>
//         <h3>Widget</h3>
//         <h3>Reviews</h3>
//         <h3>Customers</h3>
//         <h3>Online Analysis</h3>
//         <h3>Settings</h3>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.querySelector(".container"));

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sbar">
        <ul>
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}
class Reviews extends React.Component {
  render() {
    return (
      <div className="revs">
        <h3>This is the Reviews Component</h3>
      </div>
    );
  }
}
class AverageRating extends React.Component {
  render() {
    return (
      <div className="avRat">
        <h3>This is the AvRating Component</h3>
      </div>
    );
  }
}
class Sentiment extends React.Component {
  render() {
    return (
      <div className="senti">
        <h3>This is the Sentiment Component</h3>
      </div>
    );
  }
}
class WebVisitors extends React.Component {
  render() {
    return (
      <div className="webVis">
        <h3>This is the WebVisitors Component</h3>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="mainParent">
        <div class="exkra">
          <Sidebar />
        </div>
        <div className="mrSuper">
          <div className="msSuper">
            <AverageRating />
            <Reviews />
            <Sentiment />
          </div>
        </div>
        <WebVisitors />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
