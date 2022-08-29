import React from 'react';
import { Container } from 'semantic-ui-react';
import "./style.scss"

const Footer = () => {
    return (
        <Container className='footer'>
            
            <div className='footer-group'>
                <span>	&#169; 2019 Market</span>
                <div className='footer-dot'/>
                <span>Privacy Policy</span>

            </div>
        </Container>
    );
};

export default Footer;