import React from 'react';
import { Container, 
         SocialNetworkContent, 
         TwitterIcon, 
         InstagramIcon, 
         FacebookIcon, 
         Text,
         Line,
         Content,
         BrazilIcon,
         Links,
         Description } from '../styles/components/Footer'

const Footer = ()=>{
    return(
        <Container>
            <SocialNetworkContent>
                <Links href="https://www.instagram.com/sl.auc/" target="_blank"><TwitterIcon/></Links>
                <Links href="https://www.instagram.com/sl.auc/" target="_blank"><FacebookIcon/></Links>
                <Links href="https://www.instagram.com/sl.auc/" target="_blank"><InstagramIcon/></Links>
            </SocialNetworkContent>
            <Line/>
            <Text>
                Ajude este fórum deixando suas experiências.
            </Text>
            <Content>
                <BrazilIcon/>
                <Description>
                    Fórum 100% Brasileiro com a finalidade de auxiliar os famosos pais de primeira viagem.
                </Description>
            </Content>
        </Container>
    );
}

export default Footer;