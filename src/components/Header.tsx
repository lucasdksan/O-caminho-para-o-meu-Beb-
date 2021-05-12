import React from 'react';
import { Container, 
         Title, 
         ContentRoutes,
         RoutesMenu } from '../styles/components/Header';

const Header = ()=>{
    return(
        <Container>
            <Title>The Way For My Baby</Title>
            <ContentRoutes>
                <RoutesMenu to='/'>Home</RoutesMenu>
                <RoutesMenu to='/states'>States</RoutesMenu>
                <RoutesMenu to='/forum'>Forum</RoutesMenu>
            </ContentRoutes>
        </Container>
    );
}

export default Header;