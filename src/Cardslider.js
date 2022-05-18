import './CardSlider.css';
import { useState } from 'react';

function CardSlider(){
    const [count, setCount] = useState(0);
    return (
        <div id="card-slider">
            <CardList />
        </div>
    );
}

function CardList() {
    const [actualCard, setCard] = useState(0);
    const [products, setProducts] = useState([ 
        {
            name: 'Atuador Linear',
            pathName: 'atuadorlinear',
            classe: 'card-view'
        },
        {
            name: 'Atuador Duplo',
            pathName: 'atuadorduplo',
            classe: 'card'
        },
        {
            name: 'Bateria',
            pathName: 'bateria',
            classe: 'card card-2'
        },
        {
            name: 'Comando',
            pathName: 'comando',
            classe: 'card card-2 card-3'
        },
        {
            name: 'Pedal',
            pathName: 'pedal',
            classe: 'card-last'
        },
    ]);
    const menuCard = products.map((product) =>
        <li className={product.classe}>
            <p>{product.name} - {product.pathName}</p>
        </li>
    );
    return (
        <div>
            <ul>{menuCard}</ul>
            <button className='button-prox'
                onClick={() => {
                    console.log(actualCard)
                    switch(actualCard){
                        case 0:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card card-2 card-3'
                                },
                            ]);
                            setCard(1);
                            break;
                        case 1:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card card-2'
                                },
                            ]);
                            setCard(2);
                            break;
                        case 2:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card'
                                },
                            ]);
                            setCard(3);
                            break;
                        case 3:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card card-2 card-3'
                                    },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card-view'
                                },
                            ]);
                            setCard(4);
                            break;
                        case 4:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card-last'
                                },
                            ]);
                            setCard(0);
                            break;
                        }
                    }
                }
            >
                Click {'>'}
            </button>
            <button className='button-prev'
                onClick={() => {
                    console.log(actualCard)
                    switch(actualCard){
                        case 0:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card card-2 card-3'
                                },
                            ]);
                            setCard(products.length-1);
                            break;
                        case 1:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card card-2'
                                },
                            ]);
                            setCard(0)
                            break;
                        case 2:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card'
                                },
                            ]);
                            setCard(1);
                            break;
                        case 3:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card card-2 card-3'
                                    },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card-last'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card-view'
                                },
                            ]);
                            setCard(2);
                            break;
                        case 4:
                            setProducts([ 
                                {
                                    name: 'Atuador Linear',
                                    pathName: 'atuadorlinear',
                                    classe: 'card-view'
                                },
                                {
                                    name: 'Atuador Duplo',
                                    pathName: 'atuadorduplo',
                                    classe: 'card'
                                },
                                {
                                    name: 'Bateria',
                                    pathName: 'bateria',
                                    classe: 'card card-2'
                                },
                                {
                                    name: 'Comando',
                                    pathName: 'comando',
                                    classe: 'card card-2 card-3'
                                },
                                {
                                    name: 'Pedal',
                                    pathName: 'pedal',
                                    classe: 'card-last'
                                },
                            ]);
                            setCard(3);
                            break;
                        }
                }
            }
            >
                {'<'} Click
            </button>
        </div>
    )
}

export default CardSlider;