import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import mugImg from "../../assets/cup.png"
import shirtImg from "../../assets/hawaiian-shirt.png"

ProductCard.propTypes = {
    item:PropTypes.object.isRequired
};

function ProductCard({item}) {
    return (
        <div className='card-wrapper'>
            <div className='item-image'>
                <img src={item.itemType==="mug"?mugImg:shirtImg} alt={item.name}/>
            </div>
            <div className='item-info'>
                <p className='item-price'>{`₺ ${item.price}`}</p>
                <p className='item-title'>{item.name}</p>
                <button className='add-button b-button'>Add</button>
            </div>
         
            
        </div>
    );
}

export default ProductCard;