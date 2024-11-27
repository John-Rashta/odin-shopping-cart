import { Link } from "react-router-dom";
import { MiniCard } from "./MiniCard";
import { useState, useRef, useEffect } from 'react';
import { MiniCardDisplay } from "./MiniCardDisplay";

function Header({data, deleteCart, changeCart}) {
    const [visible, setVisible] = useState(false);

    function handleVisible() {
        setVisible(false);
    }
    
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to={{pathname:"/shop"}} state={data}>Shop</Link>
            <div>
                <div onClick={() => { setVisible(!visible)}} >Show Cart</div>
                {visible &&  
                <MiniCardDisplay data={data} deleteCart={deleteCart} changeCart={changeCart} makeVisible={handleVisible} />
                }
            </div>
        </header>
    )

}

export {Header};