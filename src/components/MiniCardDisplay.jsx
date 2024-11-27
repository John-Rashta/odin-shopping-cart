import { Link } from "react-router-dom";
import { MiniCard } from "./MiniCard";
import { useState, useRef, useEffect } from 'react';

function MiniCardDisplay({data, deleteCart, changeCart, makeVisible}) {

    const cartRef = useRef();

    useEffect(() => {
        const handleOutside = (e) => {
            if (!cartRef.current.contains(e.target)) {
                makeVisible();
            }

        }

        document.addEventListener("mousedown", handleOutside);

        return () => {
            document.removeEventListener("mousedown", handleOutside);
        }
    });

    return (
        <div ref={cartRef} >
            { data.shopCart.length > 0 ? data.shopCart.map((val) => {
                return <MiniCard key={val[0]} deleteCart={deleteCart} changeCart={changeCart} id={val[0]} quantity={val[1]} price={val[2]} name={val[3]} />
            }  ) : <div> No Items </div>
            } 
        </div>
    )

}

export {MiniCardDisplay};