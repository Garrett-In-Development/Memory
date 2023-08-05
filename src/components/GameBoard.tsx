import { ICard, ICards } from "./ICard";
import SingleCard  from "./SingleCard";

export default function GameBoard(cards: any) {
    if(cards.cards === undefined) {
        return (
        <div className="w-full h-3/5 m-16 bg-purple-500">
        </div>
        );
    }
    return (
        <div className="w-full h-3/5 bg-purple-500 grid grid-cols-4 grid-rows-4 gap-16">
            {cards.cards.map( (card: ICard) => (
                <SingleCard {...card}/>
            ))}
        </div>
    );  
 }