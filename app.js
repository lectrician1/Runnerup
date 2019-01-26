const express = require('express')
const app = express()
const port = process.env.PORT
var React = require('react');
var ReactDOM = require('react-dom');
 
class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
 
ReactDOM.render(<MyComponent />, node);
