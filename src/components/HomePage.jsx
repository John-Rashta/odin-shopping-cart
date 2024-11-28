import { Link } from "react-router-dom";

function HomePage() {

    return (
        <main>
            <h1>Welcome to Something Something Shop</h1>
            <h2>Enjoy your Shopping!</h2>
            <Link to={{pathname:"/shop"}}>Start Shopping</Link>
        </main>

        
    )

};

export {HomePage};