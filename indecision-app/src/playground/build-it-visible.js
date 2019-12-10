class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "hide details" : "show details"}{" "}
        </button>

        {this.state.visibility && (
          <div>
            <p>This is what you should see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const app={
//     title:'Visibility Toggle',
// };

// let visibility= false;
// const togglevisibility=()=>{
//     visibility=!visibility;
//     renderApp();
// };

// const renderApp=()=>{
//     const template =(
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick = {togglevisibility}>
//             {visibility? 'hide details':"show details"}
//         </button>
//         {visibility && (
//             <div>
//             <p>This is what you should see!</p>
//             </div>
//         )}
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template,appRoot);
// };
// renderApp();
