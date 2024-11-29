import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ShoppingPage } from './components/ShoppingPage';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';



function App() {
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

  function addToCart(amount, id, price, name) {
      if (shopCart.some((val) => val[0] === id)) {
          const rawCart = shopCart;
          const newCart = rawCart.map((val) => {
              if (val[0] === id) {
                  return [val[0], Number(val[1]) + amount, val[2], val[3]];
              }
              return val;
          });
          setShopCart(newCart);
          return;
      }
      const newCart = shopCart;
      newCart.push([id, Number(amount), price, name]);
      setShopCart(newCart);
  }

  function deleteCart(id) {
    const rawCart = shopCart;
    const newCart = rawCart.filter((val) => val[0] !== id);
    setShopCart(newCart);
  }

  function changeCart(id, amount) {
    const rawCart = shopCart;
    const newCart = rawCart.reduce((prevArr, currentItem) => {
      if (currentItem[0] === id) {
        if (currentItem[1] + amount <= 0) {
          return prevArr;
        }
          prevArr.push([currentItem[0], Number(currentItem[1]) + amount, currentItem[2], currentItem[3]]);
          return prevArr;
      }
      prevArr.push(currentItem);
      return prevArr;
    }, []);
    setShopCart(newCart);
  }

  const {name} = useParams();

  return (
    <MainContainer>
        <Header data={{shopCart, shopData}} deleteCart={deleteCart} changeCart={changeCart} />
        {
          name === "shop" ? (
            <ShoppingPage fullData={{shopData, shopCart}} addToCart={addToCart} />
          ) : (
            <HomePage/>
          )
        }

    </MainContainer>
    
  )
}

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #fbcfe8;
`;

export default App;
