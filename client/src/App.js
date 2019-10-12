import React from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch.js'
import PlayerList from './components/PlayerList'

function App() {
  const [data, setData] = useFetch([]);
  console.log(data);
  
  return (
    <div>
      <PlayerList players={data} />
    </div>
  )

}

export default App;
