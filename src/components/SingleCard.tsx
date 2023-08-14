import Back from '../back.png';

export default function SingleCard( { ...props } ) {
  const { card, handleChoice, flipped } = props;

  function handleClick() {
    handleChoice(card);
  }

  return (
    <div className="relative flex flex-col w-32 h-32 overflow-hidden card">
      <div className={flipped ? "flipped w-full h-full justify-items-center" : "w-full h-full justify-items-center"}>
        <img
          className='absolute w-full h-full bg-white border-4 border-white rounded-2xl front '
          src={card.src}
          alt="front"
        />
        <img
          className='w-full h-full back'
          src={Back}
          alt="Back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
