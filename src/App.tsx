import SingleCard from "./components/SingleCard"
import Apple from './apple.png';
import Sword from './sword.png';
import FootBall from './football.png';
import Table from './table.png';
import Car from './car.png';
import Fish from './fish.png';
import { useEffect, useState } from 'react';
import { ICards, ICard } from "./components/ICard";

const cardImages = [
  {"src" : Apple },
  {"src" : Sword },
  {"src" : FootBall },
  {"src" : Table },
  {"src" : Car },
  {"src" : Fish }
]

function App() {
  const [cards, setCards] = useState<ICards>({ cards: [] });
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard>();
  const [choiceTwo, setChoiceTwo] = useState<ICard>();
  const [disabled, setDisabled] = useState<boolean>(false);

  const shuffleCards = () => {
      const shuffledCards: ICards = {
        cards: [...cardImages, ...cardImages]
                .sort(() => Math.random() - 0.5)
                .map( card => ({ id: Math.random(), src: card.src, matched: false }))
      }
      setCards(shuffledCards);
      setTurns(0);
  }

  const handleChoice = (card: ICard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // choiceOne.matched = true;
        // choiceTwo.matched = true;
        setCards(prevCards => {
          return {
            cards : prevCards.cards.map(card => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true}
              }
              else {
                return card;
              }
            })
          }
        })
        resetTurn();
      }
      else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  return (
    <div className="w-fit h-fit App" role="Main">
      <div className="flex flex-col items-center w-screen h-screen p-16 bg-gray-700">
        <h1 className="p-6 text-3xl text-white">Memory</h1>
        <button
          className="w-32 h-8 text-white bg-black border-4 border-white hover:bg-red-500"
          onClick={shuffleCards}
        >
          New Game
        </button>
        <div className="p-8 m-16 bg-purple-500 w-512 h-200 justify-items-center grid grid-cols-4 grid-rows-3 gap-4 rounded-3xl">
          {cards.cards.map( (card: ICard) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card.matched || card === choiceOne || card === choiceTwo}
              disabled={disabled}
            />
          ))}
        </div>
        <h2 className="text-white">
          Turns: {turns}
        </h2>
      </div>
    </div>
  );


}

export default App;
