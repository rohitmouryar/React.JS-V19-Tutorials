// export const App = () =>{
//   return <h1>Hello Rohit Mourya</h1>;  
// };


// Task 2
// Babel : It is JS compiler (React -> JS code)
// return React.createElement("h1", null, "Hello Rohit Mourya");


// Tutorial 7: ComponentS
// Step 1: Create a component
 const Greeting = () =>{
  return <h1>Hello Rohit Mourya</h1>;  
}

// Step 2: Use the component
export const App = () =>{
  return(
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
