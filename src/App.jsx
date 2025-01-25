import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'


function App() {
  return(
    <body>
      <div id="grid-pattern">
        <Card cardName="Deck"/>
        <div id="hand"><Card cardName="Card name" cardDescription="Brief description of the card" /></div>
      </div>
    </body>
  )
}

export default App
