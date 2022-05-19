import React from 'react';
import { Title, Subitle } from './styles';

function Home() {
    return (
        <>
            <Title>Home</Title>
            <Subitle>Esta es mi casa</Subitle>
            <a href="/cart">Cart</a>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
            </ul>
        </>
    );
}

export default Home;
