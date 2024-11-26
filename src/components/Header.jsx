import { Link } from "react-router-dom";
import { MiniCard } from "./MiniCard";

function Header({data, deleteCart, changeCart}) {
    
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to={{pathname:"/shop"}} state={data}>Shop</Link>
            <div>{ data.shopCart.length > 0 ? data.shopCart.map((val) => {
                    return <MiniCard key={val[0]} deleteCart={deleteCart} changeCart={changeCart} id={val[0]} quantity={val[1]} price={val[2]} name={val[3]} />
                }  ) : "No Items"
                } </div>
        </header>
    )

}

export {Header};