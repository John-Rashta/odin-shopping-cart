import { useState } from 'react';
import PropTypes from 'prop-types';

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
            <h3>{name}</h3>
            <p>{price}$ </p>
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
                addCart(amount, id, price, name);
                setAmount(0);
                }
            }
            >Add to Cart</button>
        </div>
    )

};

Card.propTypes = {
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    addCart: PropTypes.func,
}

export {Card};