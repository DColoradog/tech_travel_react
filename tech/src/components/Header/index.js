import React, { useContext } from "react";
import CartContext from "../../context/cart";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import group from '../../assets/Group.svg';
import { Container, HeaderContainer, Cart } from './styles';


function Header() {
    const { setState, state } = useContext(CartContext);
    const totalQuantity = state.cart.reduce((acc, travel) => acc + travel.quantity, 0,)
    return (
        <Container>
            <HeaderContainer>
                <Link to="/">

                    <img src={group} alt="Logo" />
                </Link>
                <Link to="/cart">
                    <Cart>
                        <div>
                            <span>{totalQuantity}</span>
                        </div>
                        <FaShoppingCart size={36} color="#fff" />
                    </Cart>
                </Link>
            </HeaderContainer>
        </Container>
    );
}

export default Header;