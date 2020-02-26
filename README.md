# react-kopplung
Intended to be a lightweight API to allow users to create react apps without JSX and to use a d3.js like syntax of chained methods. 'react-chain' is already an npm module so I went for a german equivalent 'react-kopplung'

For now you can use it like this, adding in the following script tag:

```
<script src="https://cdn.jsdelivr.net/gh/Alex-ley/react-kopplung@latest/ReactKopplung.js" />
```

In conjunction with (following):

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js />
```

This way, you can write react, without JSX, without babel and without webpack.

If we were to repeat a simple example from the react website on how to use the useState hook - https://reactjs.org/docs/hooks-state.html

Then we could re-write it with react-kopplung as (Demo: https://codepen.io/Alexander9111/pen/GRJrjpM):

```
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);
  const handleClick = () =>{
    setCount(1 + count);
  }
  
  const returnObj = new ReactKopplung();
  returnObj
    .setRoot('div') /* Or .setRoot('<>') for a fragment */
      .child('p')
      .setText(`You clicked ${count} times`)
    .parent()
    .child('button')
      .setText('Click Me')
      .setProp('style', {background: '#ffc8c4'})
      .setProp('onClick', handleClick);

  return returnObj.rootNode().render();
}

ReactDOM.render(
  React.createElement(Example,null,null),
  document.getElementById('root')
);
```
