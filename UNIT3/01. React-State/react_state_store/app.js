//Working code using state, passing props (to greeter), using .map, and using an onClick handler

console.log(products);
class Greeter extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Hi there {this.props.name}</h1>;
  }
}
class App extends React.Component {
  // New method. Much easier:
  state = {
    products: products,
    name: "Ira",
    developer: "Dejay",
    breakoutRooms: [1, 2, 3, 4]
  };
  handleGreeterClick = () => {
    console.log("Clicked!");
    this.setState({ name: "Jordan" });
  };
  render() {
    return (
      <div>
        <div onClick={this.handleGreeterClick}>
          <Greeter name={this.state.name} location={"Los Angeles"} />
          <a href=""></a>
        </div>
        <ul>
          {this.state.products.map(product => {
            return (
              <li>
                {product.name} {product.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
