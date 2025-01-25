import bubbles from './assets/pictures/bubbles background.png'

/* Cards will have different colors depending on their types:
        Movement cards: green
        Enemy cards: red
        Attack cards: blue
 */

function Card() {
    return (
        <div className="card">
            <img src={bubbles} className="cardImage" alt="bubbles"></img> {/* Not sure if I want images; we plan on implementing 3D models, but images might still be useful */}
            <h2 className="cardTitle">&lt;Name of card will go here&gt;</h2>
            <p>&lt;Some brief information about the card!&gt;</p>
        </div>
    );
}

export default Card;