import { Card } from "./Card";
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ShoppingPage({fullData, addToCart}) {

    return (
        <div>
            <TopContainer className="shopTop">
            All Products
            </TopContainer>
            <ProductsContainer>
                {fullData.shopData.map((val) => {
                return <Card key={val.id} name={val.title} price={val.price} image={val.image} id={val.id} addCart={addToCart}/>
                })}
            </ProductsContainer>
        </div>
        
    )

};

ShoppingPage.propTypes = {
    fullData: PropTypes.object,
    addToCart: PropTypes.func,
}

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    gap: 25px;
    justify-content: center;
    padding: 40px;
`;

const TopContainer = styled.h2`
    text-align: center;
    font-size: 2rem;
    color: black;
`;

export {ShoppingPage};