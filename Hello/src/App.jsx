// export const App = () =>{
//   return <h1>Hello Rohit Mourya</h1>;  
// };


// Task 2
// Babel : It is JS compiler (React -> JS code)
// return React.createElement("h1", null, "Hello Rohit Mourya");


// Tutorial 6: ComponentS

// Step 1: Create a component
 const Greeting = () =>{
  return <h1>Hello Rohit Mourya</h1>;  
}


// Step 2: Use the component
/*export const App = () =>{
  return(
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
*/



// Tutorial 7: React Fragments

// How to remove multiple node from the DOM 
// Step 1 Using Array
/*export const App = () =>{
  return([
    <Greeting key={1} />,
    <Greeting key={2} />,
    <Greeting key={3} />,
    <Greeting key={4} />
  ]
    
  )
}
  */

// Step 2: Using React Fragment
// import React, { Fragment } from "react";  
import { Fragment } from "react";

export const App = () =>{
  return(
    // <React.Fragment>
    //   <Greeting />
    //   <Greeting />
    //   <Greeting />
    //   <Greeting />
    // </React.Fragment>

    // <Fragment>
    //   <Greeting />
    // </Fragment>

    <>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    </>
  )
}