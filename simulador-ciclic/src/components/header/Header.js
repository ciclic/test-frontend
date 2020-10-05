import React from 'react';
import { Header, Img, H1 } from './styles'
import logo from './logo.svg'

function HeaderContainer() {
    return (
        <Header>
            <figure><Img src={logo} alt="Ciclic" /></figure>

            <H1>
                Simule seu investimento
            </H1>
        </Header>
    );
}

export default HeaderContainer;
