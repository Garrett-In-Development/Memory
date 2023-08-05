import Back from '../back.png';
import { ICard } from './ICard';

export default function SingleCard( card: ICard ) {

    return (
        <div className="w-16 h-16 flex flex-col">
            <div className='w-full h-full bg-white'>
                <img src={card.src} alt="front" />
            </div>
            <div className='w-full h-full'>
                <img src={Back} alt="" />
            </div> 
        </div>
    );
};