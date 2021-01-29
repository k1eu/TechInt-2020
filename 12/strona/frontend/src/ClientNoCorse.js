import React from 'react';

import axios from 'axios';

export default class ClientNoCorse extends React.Component {
  state = {
    result : []
  }

  componentDidMount() {
  }
  
  handleChange = event => {
      event.preventDefault()
    axios.get(`http://localhost:3001/no-cors`)
    .then(res => {
        console.log(res.data)
        var resultData = res.data
        this.setState({result: resultData})
    })
    .catch(err => {
      console.log(err)
      var resultData = err
      this.setState({result: resultData})
    })
  }

  render() {
    return (
        <div>
        {this.state.result.text}
        <button onClick={this.handleChange}> Request without CORS</button>
      </div>
    )
  }
}