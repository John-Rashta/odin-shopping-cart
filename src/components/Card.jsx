import { useState } from 'react';

function Card({name, price, image, id, addCart}) {
    const [amount, setAmount] = useState(0);

    function increaseAmount() {
        if (isNaN(amount)) {
            setAmount(1);
        } else {
            setAmount(Number(amount) + 1);
        }
    }

    function decreaseAmount() {
        if (isNaN(amount)) {
            setAmount(0);
        } else {
            if (amount === 0) {
                return;
            }
            setAmount(Number(amount) - 1);
        }
    }
    return (
        <div>
            <img src={image} alt={name} width={50} />
            <h2>{name}</h2>
            <p>{price} </p>
            <div>
                <button onClick={increaseAmount} >&#x25B2;</button>
                <input
                type="text"
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
                />
                <button onClick={decreaseAmount} >&#x25BC;</button>
            </div>
            <button
            onClick={ () => {
                if (isNaN(amount)) {
                    setAmount(0);
                    return;
                }
                addCart(amount, id);
                setAmount(0);
                }
            }
            >Add to Cart</button>
        </div>
    )

};

export {Card};