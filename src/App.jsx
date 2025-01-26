import { useState, useEffect } from 'react';
import { deck as initialDeck, hazardsAndEnemies} from './cards.js'; 
import Card from './Card.jsx';
import './index.css';
import './App.css';
import bubbleManImg from './assets/pictures/bubbleman.png';

// StatBox Component
function StatBox({ hp, attack, defense }) {
  return (
    <div id="stat-box">
      <div className="stat-item">HP: {hp}</div>
      <div className="stat-item">Attack: {attack}</div>
      <div className="stat-item">Defense: {defense}</div>
    </div>
  );
}

function App() {
  // Track deck information
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState(initialDeck);

  // Manage player stats
  const [hp, setHp] = useState(10);
  const [attack, setAttack] = useState(3);
  const [defense, setDefense] = useState(4);

  const [position, setPosition] = useState({ x: 950, y: 1550 });
  const [gameOver, setGameOver] = useState(false);

  // Victory Music
  const victoryMusic = new Audio('./assets/musicactivate.mp3'); // Replace with actual file path

  useEffect(() => {
    // Check if the player has reached the top 10% of the screen (y <= 10% of screen height)
    if (position.y <= window.innerHeight * 0.1 && !gameOver) {
      setGameOver(true);
      victoryMusic.play(); 
      alert("You win!"); 
    }
  }, [position, gameOver, victoryMusic]);

  function moveCharacter(direction) {
    switch (direction) {
      case 'Forward!':
        setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y - 125 }));
        break;
      case 'Backward!':
        setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 125 }));
        break;
      case 'Left!':
        setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - 125 }));
        break;
      case 'Right!':
        setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + 125 }));
        break;
      case 'Northwest!':
        setPosition(prevPosition => ({ y: prevPosition.y - 125, x: prevPosition.x - 125 }));
        break;
      case 'Northeast!':
        setPosition(prevPosition => ({ y: prevPosition.y - 125, x: prevPosition.x + 125 }));
        break;
      case 'Southwest!':
        setPosition(prevPosition => ({ y: prevPosition.y + 125, x: prevPosition.x - 125 }));
        break;
      case 'Southeast!':
        setPosition(prevPosition => ({ y: prevPosition.y + 125, x: prevPosition.x + 125 }));
        break;
      default:
        break;
    }
  }

  function drawCard() {
    if (deck.length === 0) { 
      return;
    } if (hand.length >= 6) { 
      return;
    }

    let cardsToDraw = 1;
    if (hand.length === 0) {
      cardsToDraw = 3;
    }

    const drawnCards = [];
    for (let i = 0; i < cardsToDraw; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const drawnCard = deck[randomIndex];
      drawnCards.push(drawnCard);
      deck.splice(randomIndex, 1); // Remove the card from the deck
    }

    setHand((prevHand) => [...prevHand, ...drawnCards]); 
    setDeck([...deck]); 
  }

  function getCardStyle(cardType) {
    switch (cardType) {
      case 'item':
        return { backgroundColor: 'lightgreen', border: '2px solid green' };
      case 'character':
        return { backgroundColor: 'lightblue', border: '2px solid blue' };
      case 'movement':
        return { backgroundColor: 'purple', border: '2px solid purple' };
      default:
        return { backgroundColor: 'white', border: '2px solid gray' };
    }
  }

  return (
    <div id="app">
      <div id="grid-pattern">
        <div id="deck-container">
          <Card id="thedeck" cardName="DECK" />
          <button onClick={drawCard} id="drawButton">Draw!</button>
        </div>
        <img src={bubbleManImg} alt="Bubbleman" id="player" style={{left: `${position.x}px`, top: `${position.y}px`}} />
        <div id="hand">
          {hand.map((card, index) => {
            let cardDescription = '';
            switch (card.cardType) {
              case 'item':
                cardDescription = `Attack Up: ${card.attackUp || 0}, Defense Up: ${card.defenseUp || 0}`;
                break;
              case 'character':
                cardDescription = `Attack: ${card.attack || 0}, Defense: ${card.defense || 0}`;
                break;
              case 'movement':
                cardDescription = ``;
                break;
              default:
                cardDescription = `Attack: ${card.attack || 0}, Defense: ${card.defense || 0}`;
            }

            const useCard = () => {
              switch(card.cardType){
                case 'movement':
                  moveCharacter(card.cardName);
                  break;
                case 'item':
                  break;
                case 'character':
                  break;
                default:
                  break; 
              }  
              setHand((prevHand) => prevHand.filter((_, i) => i !== index));
            }

            return (
              <div key={index} style={getCardStyle(card.cardType)} onClick={useCard}>
                <Card
                  cardImage={card.cardImage}
                  cardName={card.cardName}
                  cardDescription={cardDescription}
                  cardType={card.cardType}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <StatBox hp={hp} attack={attack} defense={defense} />
    </div>
  );  
}

export default App;
