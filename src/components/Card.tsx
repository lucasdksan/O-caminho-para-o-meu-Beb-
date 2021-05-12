import React from 'react';
import { Container, Content, HeaderCard, NameUser, UserIcon } from '../styles/components/Card';

interface CardProps {
    name: string;
    experience: string;
}

const Card:React.FC<CardProps> = ({experience,name})=>{
    return(
        <Container>
            <HeaderCard>
                <NameUser>{name}</NameUser>
                <UserIcon/>
            </HeaderCard>
            <Content>
                {experience}
            </Content>
        </Container>
    );
};

export default Card;