import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Layout = props => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};
const template = (
  <div>
    <h1>page</h1>
  </div>
);
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

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

// class Action extends React.Component{

//   render(){
//     return(
//       <div>
//       <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
//       </div>
//     );
//   }
// }

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

// const User = (props)=>{
//   return(
//     <div>
//     <p>Name:{props.name}</p>
//     <p>Age:{props.age}</p>
//     </div>
//   );
// };

// class OlderSyntac {
//     constructor(){
//         this.name = 'mike';
//     }
//     getGreeting(){
//         return `hi, my name is ${this.name}.`;
//     }
// }
// const olderSyntac= new OlderSyntac();
// console.log(olderSyntac.getGreeting());

// class NewSyntax{
//     name = 'jen';
//     getGreeting =()=>{
//         return `hi,my name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
