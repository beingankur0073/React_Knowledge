
// {} for attributes
// 3rd argument is children
// atributes+children=prop

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * <div>
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * <div>
 * 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * 
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * <div>
 * 
 * 
 * ReactElement(Object)=>HTML(Browser understands)
 */


const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
       // React.createElement("h1",{},"I'm an h1 tag")
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
           // React.createElement("h1",{},"I'm an h1 tag")
           [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
        ),
        React.createElement(
            "div",
            {id:"child2"},
           // React.createElement("h1",{},"I'm an h1 tag")
           [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
        )
    ]
)


// JSX 





const heading=React.createElement("h1",
    {id:"heading",xyz:"abc"},
"Hello World from React!");


// heading is js object not h1 tag
// console.log(heading)
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("header"));


// render converts object to h1 tag
//root.render(heading);
// replaces everything inside root not appended
root.render(parent2)