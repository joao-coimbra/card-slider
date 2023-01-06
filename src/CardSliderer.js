import './CardSliderer.css';

import { useState } from 'react';

export default function CardSliderer() {

    return (
        <section id='card'>
            <CardsTimer />
        </section>
    );
}

const CardsTimer = () => {
    const [object, setObject] = useState({
        key1: 0,
        key2: 1,
        key3: 2,
    });
    const [count, setCount] = useState(1000);

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function passCard() {
        await delay(count);

        setObject({
            key1: object.key1 + 1,
            key2: object.key2 + 1,
            key3: object.key3 + 1
        });

        // switch(count) {
        //     case 0:
        //         setCount(count+1)
        //         setObject({
        //             key1: 1,
        //             key2: 2,
        //             key3: 3
        //         });
        //         break;
        //     case 1:
        //         setCount(count+1);
        //         setObject({
        //             key1: 2,
        //             key2: 3,
        //             key3: 4
        //         });
        //         break;
        //     case 2:
        //         setCount(count+1);
        //         setObject({
        //             key1: 3,
        //             key2: 4,
        //             key3: 5
        //         });
        //         break;
        //     default:
        //         setCount(0)
        //         setObject({
        //             key1: 0,
        //             key2: 1,
        //             key3: 2
        //         });
        //         break;
        // }
    }

    passCard()

    return(
        <>
            <p>{count/1000} s</p>
            <h1>{object.key1} {object.key2} {object.key3}</h1>
            <button onClick={() => {object.key1 = 0; object.key2 = 1; object.key3 = 2}}>Reset</button>
            <button onClick={() => ( count >= 500 ) ? setCount(count - 500) : setCount(0)}>-0,5s time</button>
            <button onClick={() => setCount(count + 500)}>+0,5s time</button>
        </>
    )
}