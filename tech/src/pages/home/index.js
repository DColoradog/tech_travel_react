import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../../context/cart';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, List, Unit } from './styles';
import api from '../../services/api';

function Home() {

    const [travelList, setTravelList] = useState({});
    const { state, setState } = useContext(CartContext);

    useEffect(() => {
        async function getTravelList() {
            const { data } = await api.get('/travels');
            setTravelList(data);
        }
        getTravelList();
    }, []);

    function handleAddToCart(travel) {
        const copyCart = [...state.cart];
        const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
        if (travelIndex >= 0) {
            copyCart[travelIndex].quantity += 1;
        } else {
            copyCart.push({ ...travel, quantity: 1 });
        }
        copyCart.push(travel);

        setState({
            cart: copyCart,
        });
    }

    return (
        <Container>
            <List>
                {travelList.map((el) => (
                    <Unit>
                        <img src={el.photo} alt='Travel' />
                        <p>{el.title}</p>
                        <strong>{el.price}</strong>
                        <button type='button' onClick={() => handleAddToCart(el)}>
                            <div>
                                <FaShoppingCart size={16} color="#fff" />
                            </div>
                            <span>Agregar al carro</span>
                        </button>
                    </Unit>
                ))}
            </List>
        </Container>
    );
}

export default Home;
