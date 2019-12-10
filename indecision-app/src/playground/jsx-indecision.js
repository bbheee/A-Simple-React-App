console.log("app.js is running!");

/*var template = React.createElement("h1", {
    id: "someid"
  }, "STH NEW!");*/
const app = {
  title: "indecision app",
  subtitle: "this is some info",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const removeall = () => {
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderTemplate = () => {
  const template = (
    <div>
      <h1> {app.title} </h1>
      {app.subtitle && <p>subtitle:{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        what should i do?
      </button>
      <button onClick={removeall}>Delete all</button>

      <ol>
        {app.options.map(option => {
          return <li key={option}> {option} </li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderTemplate();
