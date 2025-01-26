import { useState } from 'react'
import { deck, hazards, enemies } from "./cards.js"
import Card from './Card.jsx'
import './index.css'
import "./App.css"

function App() {
  const [hand, setHand] = useState([]);
  
  function drawCard(deck) {
    if(deck.length === 0) {
        //end game
    }

    // Choose a random card and remove it from the deck.
    const drawnCard = deck[Math.floor(Math.random() * deck.length)];
    deck.splice(randomIndex, 1);

    return drawnCard;
}

  return(
    <div id="app">
      <div id="grid-pattern">
        <Card id="deck" cardName="DECK"/>
        <button onClick={drawCard}>Draw!</button>
        <div id="hand">
          {hand.map((card, index) => (
            <Card
              key={index}
              cardName={card.cardName}
              cardDescription={`Attack: ${card.attack}, Defense: ${card.defense}`}
              cardType="attack" // Or "movement", "enemy", etc., based on card type
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
