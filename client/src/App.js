import React from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch.js'
import PlayerList from './components/PlayerList'
import axios from 'axios'
import Navbar from './components/Navbar.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ data: res.data })
      }).catch(err => { console.log(err) })
  }


  render() {
    return (
      <div>
        <Navbar />
        <PlayerList players={this.state.data} />
      </div >
    )
  }
}

export default App;
