

const header = React.createElement(
    "div",
    { className: "title" },
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
    React.createElement("h3", {}, "Heading 3")
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(header);