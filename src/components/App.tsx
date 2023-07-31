import GameBoard from "./GameBoard"
import Apple from 'apple.png';
import Sword from 'sword.png';
import FootBall from 'football.png';
import Table from 'table.png';
import Car from 'car.png';
import Fish from 'fish.png';
import { useState } from 'react';
import { ICards } from "./ICard";

const cardImages = [
  {"img" : Apple },
  {"img" : Sword },
  {"img" : FootBall },
  {"img" : Table },
  {"img" : Car },
  {"img" : Fish }
]


function App() {
  const [cards, setCards] = useState<ICards>([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
      const shuffledCards: ICards = { 
        cards: [...cardImages, ...cardImages]
                .sort(() => Math.random() - 0.5)
                .map( card => ({ id: Math.random(), src: card.img }))
      }

      setCards(shuffledCards);
      setTurns(0);
  }

  return (
    <div>
      <h1 className="text-xl">Memory</h1>
      <button 
        className="w-32 h-8 border-4 border-white bg-black test-white hover:bg-red-500"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <GameBoard cards={cards}/>
      <h2>Turns: {turns}</h2>
    </div>
  );
}

export default App;
