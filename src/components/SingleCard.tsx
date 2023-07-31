import Back from 'back.png';
import { ICard } from './ICard';

export default function SingleCard( props: any ) {
    const { id, src } = props;

    return (
        <div className="w-32 h-32">
            <div className='w-full h-full'>
                <img src={src} alt="front" />
            </div>
            <div className='w-full h-full'>
                <img src={Back} alt="" />
            </div> 
        </div>
    );
};