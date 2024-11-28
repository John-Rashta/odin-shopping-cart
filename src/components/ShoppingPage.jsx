import { Card } from "./Card";
import PropTypes from 'prop-types';

function ShoppingPage({fullData, addToCart}) {

    return (
        <div>
            <h2 className="shopTop">
            All Products
            </h2>
            <div>
                {fullData.shopData.map((val) => {
                return <Card key={val.id} name={val.title} price={val.price} image={val.image} id={val.id} addCart={addToCart}/>
                })}
            </div>
        </div>
        
    )

};

ShoppingPage.propTypes = {
    fullData: PropTypes.object,
    addToCart: PropTypes.func,
}

export {ShoppingPage};