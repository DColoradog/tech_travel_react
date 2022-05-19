import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import group from '../../assets/Group.svg';
import { Container, HeaderContainer, Cart } from './styles';


function Header() {
    return (
        <Container>
            <HeaderContainer>
                <Link to="/">

                    <img src={group} alt="Logo" />
                </Link>
                <Link to="/cart">
                    <Cart>
                        <div>
                            <span>0</span>
                        </div>
                        <FaShoppingCart size={36} color="#fff" />
                    </Cart>
                </Link>
            </HeaderContainer>
        </Container>
    );
}

export default Header;