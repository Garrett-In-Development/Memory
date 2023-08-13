import { ICard } from "./ICard";
import SingleCard  from "./SingleCard";

export default function GameBoard({ ...props }) {
    const { cards, handleChoice} = props;

    if(cards === undefined) {
        return (
        <div className="w-full m-16 bg-purple-500 h-3/5">
        </div>
        );
    }



    return (
        <div className="w-full m-16 bg-purple-500 h-3/5 grid grid-cols-4 grid-rows-4 gap-16">
            {cards.map( (card: ICard) => (
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                />
            ))}
        </div>
    );
 }
