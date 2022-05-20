import React, { useContext } from 'react';
import CartContext from '../../context/cart';
import { MdDelete } from 'react-icons/md';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal } from './styles';

function Cart() {
    const { state, setState } = useContext(CartContext);
    return (
        <Container>
            <ContainerList>
                {state.cart.map((el) =>
                    <TravelItem>
                        <img src={el.photo} alt="titulo del viaje" />
                        <Info>
                            <p>{el.title}</p>
                            <strong>{el.price}</strong>
                        </Info>
                        <Quantity readOnly type='number' value={el.quantity} />
                        <Subtotal>
                            <p>{el.quantity + el.price}</p>
                            <button typ='button'></button>
                            <MdDelete size={24} color="#0676d9" />
                        </Subtotal>

                    </TravelItem>
                )}
            </ContainerList >
        </Container >
    );
}

export default Cart;
