//whole component with multi-line map:

console.log(products);

class Greeter extends React.Component {
    render () {
        console.log(this.props);
        return <h1>Hi there {this.props.name}</h1>;
    }
}
class App extends React.Component {
  state = {
      products: products,
      name: "Andrei",
      developer: "Andrei",
      breakoutrooms: [1,2,3,4]
  };
  render () {
      return (
          <div>
              <Greeter name={this.state.name} location={"Atlanta"} />
          </div>
      )
  }

ReactDOM.render(<App />, document.querySelector(".container"));
