class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () =>{
//   count++;
//   renderCounterApp();
// };
// const minusOne=() =>{
//   count--;
//   renderCounterApp();
// }
// const reset=()=>{
//   count=0;
//   renderCounterApp();
// }

// const renderCounterApp=()=>{
//   const templateTwo =(
//     <div>
//     <h1>Count: {count} </h1>
//     <button onClick={(addOne)}>+1</button>
//     <button onClick={(minusOne)}>-1</button>
//     <button onClick={(reset)}>reset</button>
//     </div>
//   );
// ReactDOM.render(templateTwo,appRoot);

// };
// renderCounterApp();

// /*const user={
// name: 'beibei',
// age: 26,
// location: 'sweden'
// };

// function getLocation(location){
// if(location){
//   return <p>location:{location}</p>;
// } else{
// return undefined;
// }
// }
// const templatetwo=(
// <div>
// <h1>{user.name ? user.name:'anony'}</h1>
// {(user.age && user.age >= 18)&&<p>Age:{user.age}</p>}
// {getLocation(user.location)}
// </div>
// )*/
