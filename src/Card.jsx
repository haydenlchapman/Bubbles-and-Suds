import bubbles from './assets/pictures/bubbles background.png'

/* Cards will have different colors depending on their types:
        Movement cards: green
        Enemy cards: red
        Attack cards: blue
 */

function Card({ cardType, cardImage, cardName, cardDescription}) {
    return (
        <div className="card ${cardType}">
            <img src={bubbles} className="cardImage" alt="bubbles"></img> {/* Not sure if I want images; we plan on implementing 3D models, but images might still be useful */}
            <h2>{cardName}</h2>
            <p>{cardDescription}</p>
        </div>
    );
}

export default Card;