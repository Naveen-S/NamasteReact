// Create this nested structure. 
/* 
 <div id="parent">
  <div id="child">
    <h1> I'm h1</h1>
    <h2> I'm h2</h2>
  </div>
  <div id="child2">
    <h1> I'm h1</h1>
    <h2> I'm h2</h2>
  </div>
 </div>
*/

// ReactElement(object) => HTML(Browser understand)

const parent = React.createElement('div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1"),
    React.createElement('h2', {}, "I'm h2")
  ]));

// const heading = React.createElement('h1', { id: 'heading' }, 'Hello world from React!');
// console.log('heading', heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);