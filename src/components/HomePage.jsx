import { useState, useEffect } from 'react';
import { Card } from './Card';
import { Link } from "react-router-dom";

function HomePage() {
    const [shopData, setShopData] = useState([]);
    const [shopCart, setShopCart] = useState([]);

    useEffect(() => {
        const fetchDataForShop = async () => {
            try {
                const rawResponse = await fetch('https://fakestoreapi.com/products');
                
                if (!rawResponse.ok) {
                    throw new Error(`HTTP error: Status ${rawResponse.status}`);
                }

                let fullData = await rawResponse.json();
                const newData = [];
                fullData.forEach((val) => {
                    newData.push({...val});
                });

                setShopData(fullData);

            } catch (err) {
                console.log(err.message);
            }
        }

        fetchDataForShop();
    }, []);

    function addToCart(amount, id) {
        if (shopCart.some((val) => val[0] === id)) {
            const rawCart = shopCart;
            const newCart = rawCart.map((val) => {
                if (val[0] === id) {
                    return [id, val[1] + amount];
                }
                return val;
            });
            setShopCart(newCart);
            return;
        }
        const newCart = shopCart;
        newCart.push([id, amount]);
        setShopCart(newCart);
    }

    console.log(shopCart)

    return (
        <div>
             <header>Odin Something Shop</header>
             <main>
                <Link to="shop">Go to Shop</Link>
                {shopData.map((val) => {
                    return <Card key={val.id} name={val.title} price={val.price} image={val.image} id={val.id} addCart={addToCart}/>
                })}
                <div>
                </div>
             </main>

        </div>
    )

};


export {HomePage};