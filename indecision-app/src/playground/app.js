// import './utils.js';
// import subtract, {square,add} from './utils.js';
// import isSenior23, {isAdult,canDrink} from './person.js';
/*when you import a default u can call it whatever.*/
// console.log("hello");
// console.log(square(4));
// console.log(add(1,2));
// console.log(subtract(100,1));
// console.log(isAdult(18));
// console.log(canDrink(20));
// console.log(isSenior23(35));

const template = <p>Testing1234</p>;
ReactDOM.render(template, document.getElementById("app"));

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmounted() {
    console.log("component unmounted");
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add it";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already exists";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
  }
  render() {
    const subtitle = "Put your life";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};
// class Header extends React.Component{
//   render() {
//     return(
//       <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do?
      </button>
    </div>
  );
};
// class Action extends React.Component{

//   render(){
//     return(
//       <div>
//       <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
//       </div>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>PLease add an option</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Options extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   this.handleRemoveAll=this.handleRemoveAll.bind(this);
//   // }
//   // handleRemoveAll(){
//   //   console.log(this.props.options);
//   // }
//   render(){
//     return(
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//       {this.props.options.map((option)=><Option key={option} optionText={option} />)}
//       </div>
//     );
//   }
// }
// class Option extends React.Component{
//   render(){
//     return(
//       <div>
//       Option:{this.props.optionText}
//       <button
//       onClick={(e)=>{
//         props.handleDeleteOption(props.optionText);
//       }
//       }
//       >
//       remove
//       </button>
//       </div>
//     );

//   }
// }
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // if(option){
    //   this.props.handleAddOption(option);
    // }
    this.setState(() => ({
      error
    }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
// const User = (props)=>{
//   return(
//     <div>
//     <p>Name:{props.name}</p>
//     <p>Age:{props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
