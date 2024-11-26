function MiniCard({name, price, id, quantity, deleteCart, changeCart}) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{price} </p>
            <div>
                <button onClick={() => changeCart(id, 1)} >&#x25B2;</button>
                <div>{quantity} </div>
                <button onClick={() => changeCart(id, -1)} >&#x25BC;</button>
            </div>
            <button
            onClick={ () => {
                deleteCart(id);
                }
            }
            >Delete</button>
        </div>
    )

};

export {MiniCard};