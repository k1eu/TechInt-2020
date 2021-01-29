import React from 'react';
import './App.css'
class Hello extends React.Component {
  render() {
    return <span>Hello from app: {this.props.appName}</span>
  }
}

export default class App extends React.Component {
  render() {
    return <h1 className={this.props.color}><Hello appName={this.props.name}/></h1>
  }
}