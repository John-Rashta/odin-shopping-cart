import { Card } from "./Card";

function ShoppingPage({fullData, addToCart}) {

    return (
        <div>
            <div>
            shop here
            </div>
            <div>
                {fullData.shopData.map((val) => {
                return <Card key={val.id} name={val.title} price={val.price} image={val.image} id={val.id} addCart={addToCart}/>
                })}
            </div>
        </div>
        
    )

};

export {ShoppingPage};