import React from 'react';
import { Container, 
         Content, 
         Img, 
         TextArea, 
         Title, 
         Text } from '../styles/pages/Home';
import Header from '../components/Header';
import ImageHome from '../assets/BabyHome.jpg';
import Footer from '../components/Footer';
import TargetEnd from '../components/TargetEnd';

function Home() {
  return (
    <Container>
      <Header/>
      <Content>
        <Img
          src= {ImageHome}
        />
        <TextArea>
          <Title>SOBRE</Title>
          <Text>
            The way for my baby é um fórum idealizado pelo Engenheiro Mecatrônico Lucas da Silva Leoncio com o objetivo de divulgar experiências para pais de primeira viagem. 
            A fonte de expiração deste projeto vem de histórias de pais jovens sem nenhuma experiência quando tiveram seu primeiro filho.
            Esse fato está presente no cenário brasileiro, se tornando algo comum.
            Para suprir a falta de informações que pais de primeira viagem possuem, esté fórem contém experiências de pais mais velho (histórias, relatos, dicas e etc.), dessa forma tirando duvidas, medos e inseguraças dos jovens pais.
          </Text>
        </TextArea>
      </Content>
      <TextArea>
        <Title>STATES</Title>
        <Text>
          A página de estados contém as fases do desenvolvimento da criança durante o período de gestação. A sua utilização visa esclarecer dúvidas e curiosidades dos pais de primeira viagem sobre o desenvolvimento do bebê, 
          detalhando cada momento divido em semanas.
        </Text>
      </TextArea>
      <TextArea>
        <Title>FORUM</Title>
        <Text>
          O fórum é uma área reservada para registrar e pequisar experiências sobre diversos temas. Com base da sua duvida ele vai oferecer experiências de outros pais.
        </Text>
      </TextArea>
      <Footer/>
      <TargetEnd/>
    </Container>
  );
}

export default Home;
