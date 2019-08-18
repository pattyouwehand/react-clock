import React from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {time: new Date()}
  }

  currentTime() {
    this.setState({time: new Date()})
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000)
  }


  render() {

    return(
      <h1>
        {this.state.time.toLocaleDateString()}
      </h1>
    )
  }
}




export default App;
