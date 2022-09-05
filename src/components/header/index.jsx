import React from 'react';
import { Container } from "semantic-ui-react"
import logo from "../../assets/logo.svg"
import basket from "../../assets/icons/basket.svg"
import { calculateBasketTotalCost } from '../../utils/helpers'
import { toggleBasketHidden } from "../../storage/redux/basket/actions";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss"


function Header() {
    const dispatch = useDispatch()
    const basketItems=useSelector(state=>state.basket.basketItems)
   
    return (
      <Container className="header-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <button
          className="basket"
          onClick={() => dispatch(toggleBasketHidden())}
        >
          <img src={basket} className={basketItems.length>0 && "active"} />
          {basketItems.length> 0 ? calculateBasketTotalCost() : ""}
        </button>
      </Container>
    );
}

export default Header;