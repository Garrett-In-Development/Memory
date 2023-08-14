import GameBoard from "./components/GameBoard"
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
  const [cards, setCards] = useState<ICards>();
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard>();
  const [choiceTwo, setChoiceTwo] = useState<ICard>();

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
      if (choiceOne.src === choiceTwo.src) {
        // choiceOne.matched = true;
        // choiceTwo.matched = true;
        setCards(prevCards => {
          if (prevCards === undefined) {
            return undefined;
          }
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
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
    setTurns(prevTurns => prevTurns + 1);
  }

  return (
    <div className="w-screen h-screen App" role="Main">
      <div className="flex flex-col items-center w-full h-full p-16 bg-gray-700">
        <h1 className="p-6 text-3xl text-white">Memory</h1>
        <button
          className="w-32 h-8 text-white bg-black border-4 border-white hover:bg-red-500"
          onClick={shuffleCards}
        >
          New Game
        </button>
        <GameBoard
          {...cards}
          handleChoice={handleChoice}
        />
        <h2>Turns: {turns}</h2>
      </div>
    </div>
  );


}

export default App;
