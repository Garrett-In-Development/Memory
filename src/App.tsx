import GameBoard from "./components/GameBoard"
import Apple from './apple.png';
import Sword from './sword.png';
import FootBall from './football.png';
import Table from './table.png';
import Car from './car.png';
import Fish from './fish.png';
import { useState } from 'react';
import { ICards } from "./components/ICard";

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

  const shuffleCards = () => {
      const shuffledCards: ICards = {
        cards: [...cardImages, ...cardImages]
                .sort(() => Math.random() - 0.5)
                .map( card => ({ id: Math.random(), src: card.src }))
      }
      setCards(shuffledCards);
      setTurns(0);
  }

  return (
    <div className="App w-screen h-screen" role="Main">
      <div className="w-full h-full bg-gray-700 flex flex-col items-center">
        <h1 className="text-xl">Memory</h1>
        <button
          className="w-32 h-8 border-4 border-white bg-black text-white hover:bg-red-500"
          onClick={shuffleCards}
        >
          New Game
        </button>
        <GameBoard {...cards}/>
        <h2>Turns: {turns}</h2>
      </div>
    </div>
  );


}

export default App;
