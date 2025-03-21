import React from "react";
import ReactDOM from 'react-dom/client'


const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
    
       [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
    )
)


const parent2=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
          
           [React.createElement("h1",{},"This is Namaste React"),React.createElement("h2",{},"I'm an h2 tag")]
        ),
        React.createElement(
            "div",
            {id:"child2"},
          
           [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
        )
    ]
)






const heading=React.createElement("h1",
    {id:"heading",xyz:"abc"},
"Hello World from React!");


console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("header"));


root.render(parent2)