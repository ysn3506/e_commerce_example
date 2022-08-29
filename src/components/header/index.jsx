import React from 'react';
import { Container } from "semantic-ui-react"
import logo from "../../assets/logo.svg"
import basket from "../../assets/icons/basket.svg"
import "./style.scss"

function Header() {
    return (
        <Container className='header-wrapper'>
            <img className="logo" src={logo} alt="logo" />
            <button className='basket'>
                <img src={basket} />
                ₺ 39.45
            </button>
        </Container>
    );
}

export default Header;