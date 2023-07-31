import { ICards } from "./ICard";
import SingleCard  from "./SingleCard";

export default function GameBoard(cards: ICards) {
    return (
        <div>
            {cards.cards.map( card => (
                <SingleCard props={card}/>
            ))}
        </div>
    );  
 }