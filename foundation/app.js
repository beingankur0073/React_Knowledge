import React from 'react'
import ReactDOM from "react-dom/client"

const elem=<span>React Element</span>


// React Element
// React.createElement=>ReactElement-JS Object=>HTMLElement(render)

const heading=React.createElement("h1",{id:"heading"},"Namaste React")
console.log(heading)

// JSX - is not HTML in JS
// HTML/XML like syntax
// (transpiled before it reaches the JS engine)-PARCEL-Babel

// Babel transpiles it to React.createElement

const jsxHeading=(
<h1 id="heading" className='head' tabIndex="1">
    Namaste React using JSX
</h1>
);


console.log(jsxHeading)

const number=10000
const fn=()=>true

// React Component
// Class Based Component- OLD
// Functional Component - NEW

// React Functional Component

const Title=()=>(
    <h1 className='head' tabIndex='5'>
        Namaste React using JSX
    </h1>
)

const title=(
    <h1 className='head' tabIndex='5'>
        {elem}
        Namaste React using JSX
    </h1>
)

// Component Composition
const HeadingComponent=()=>(
    <div id='container'>
        {Title()}
        <Title/>
        {title}
        <h2>{100+200}</h2>
        <h1>Namaste React Functional Component</h1>
    </div>

)


const HeadingComponent1=()=> <h1>Namaste React Functional Component</h1>


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)