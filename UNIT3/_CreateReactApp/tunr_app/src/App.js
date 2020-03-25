import React from "react";
import "./App.css";
import playlists from "./data";

class App extends React.Component {
  state = { playlists };
  render() {
    return (
      <div>
        <header>
          <h1>Tunr</h1>
        </header>
        <div className="App">
          <div className="playlist">
            <h3>{this.state.playlists.title}</h3>
            <form>
              <label htmlFor="title">title</label>
              <input
                type="text"
                value={this.state.playlists.title}
                id="title"
              />
            </form>

            <table>
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Title</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playlists.songs.map((song, index) => {
                  return (
                    <tr>
                      <td>{song.artist}</td>
                      <td>{song.title}</td>
                      <td>{song.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
