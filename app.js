/* //create element is just return an objeect
 const heading = React.createElement(
    "h1",
    {id:"heading1"},

    "Heading 1");

    const heading2 = React.createElement(
      "h2",
      {id:"heading2"},
  
      "Heading2");

   const container =  React.createElement("div",
      {id: "container"},
      [heading,heading2]
   );

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(container);
//render is converting an object to h1 tag and putting in the ui.
/*


/*
 try to create like this nested children
 <div id = 'parent'>
   <div id = "children">
      <h1>I am parent</h1>
      <h2>I am children </h2>
   </div>
 </div>    
*/

const parent = React.createElement("div",
   {id:"parent"},
   React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"i am h1 tag"),
      React.createElement("h2",{},"i am h2 tag")

   ])

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


