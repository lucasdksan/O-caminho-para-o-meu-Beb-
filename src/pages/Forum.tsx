import React, { useState } from 'react';
import { Container, 
         Content,
         SearchArea,
         Input,
         ButtonSearch,
         SearchIcon,
         Title,
         RegisterArea,
         SearchResult,
         AreaInput,
         InputForm,
         Target,
         TextArea,
         Button } from '../styles/pages/Forum';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TargetEnd from '../components/TargetEnd';
import Card from '../components/Card';

const Forum = ()=>{
    const [ searchInput, setSearchInput ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ experience, setExperience ] = useState('');
    const [ matters, setMatters ] = useState('');
    function handleSubmit(){

    }
    function handleSearch(){

    }
    return(
        <Container>
            <Header/>
            <Content>
                <SearchArea>
                    <Input
                        placeholder = 'Digite aqui sua pesquisa'
                        value={searchInput}
                        type='text'
                        onChange={e=>{setSearchInput(e.target.value)}}
                    />
                    <ButtonSearch
                        onClick={handleSearch}
                    ><SearchIcon/></ButtonSearch>
                </SearchArea>
                <Title>Resultados da sua pesquisa</Title>
                <SearchResult>
                    <Card 
                        name='Lucas da Silva Leoncio'
                        experience='Lorem ipsum faucibus aliquam nisl ornare suscipit lectus, nullam eros etiam aptent mauris platea quam, elementum est amet cras tortor dapibus. pharetra primis curabitur at aptent vitae volutpat dapibus vestibulum, semper class sem integer placerat iaculis diam. sagittis mi vivamus porta etiam sem neque faucibus, proin vehicula elit consequat elementum tellus, convallis senectus vivamus feugiat quisque dapibus. felis auctor fermentum accumsan commodo diam ipsum nullam ut lacus volutpat lectus, proin platea donec platea ut facilisis curabitur donec eleifend libero. sollicitudin lacus arcu bibendum ligula orci class, nisl cursus interdum mauris felis fringilla purus, quisque metus lacus nibh libero. '
                    />
                    <Card
                        name='Lucas da Silva Leoncio'
                        experience='Lorem ipsum faucibus aliquam nisl ornare suscipit lectus, nullam eros etiam aptent mauris platea quam, elementum est amet cras tortor dapibus. pharetra primis curabitur at aptent vitae volutpat dapibus vestibulum, semper class sem integer placerat iaculis diam. sagittis mi vivamus porta etiam sem neque faucibus, proin vehicula elit consequat elementum tellus, convallis senectus vivamus feugiat quisque dapibus. felis auctor fermentum accumsan commodo diam ipsum nullam ut lacus volutpat lectus, proin platea donec platea ut facilisis curabitur donec eleifend libero. sollicitudin lacus arcu bibendum ligula orci class, nisl cursus interdum mauris felis fringilla purus, quisque metus lacus nibh libero. '
                    />
                    <Card
                        name='Lucas da Silva Leoncio'
                        experience='Lorem ipsum faucibus aliquam nisl ornare suscipit lectus, nullam eros etiam aptent mauris platea quam, elementum est amet cras tortor dapibus. pharetra primis curabitur at aptent vitae volutpat dapibus vestibulum, semper class sem integer placerat iaculis diam. sagittis mi vivamus porta etiam sem neque faucibus, proin vehicula elit consequat elementum tellus, convallis senectus vivamus feugiat quisque dapibus. felis auctor fermentum accumsan commodo diam ipsum nullam ut lacus volutpat lectus, proin platea donec platea ut facilisis curabitur donec eleifend libero. sollicitudin lacus arcu bibendum ligula orci class, nisl cursus interdum mauris felis fringilla purus, quisque metus lacus nibh libero. '
                    />
                </SearchResult>
            </Content>
            <Title>Deixe suas experiências aqui!!</Title>
            <RegisterArea>
                <AreaInput>
                    <Target>Nome Completo</Target>
                    <InputForm 
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                        type="text"
                    />
                </AreaInput>
                <AreaInput>
                    <Target>Email</Target>
                    <InputForm 
                        type="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}} 
                    />
                </AreaInput>
                <AreaInput>
                    <Target>Assunto</Target>
                    <InputForm 
                        type="text"
                        value={matters}
                        onChange={e => {setMatters(e.target.value)}}    
                    />
                </AreaInput>
                <AreaInput>
                    <Target>Digite sua experiência</Target>
                    <TextArea
                        value = {experience}
                        onChange = {e => {setExperience(e.target.value)}}
                    />
                </AreaInput>
                <Button
                    onClick={handleSubmit}
                >Registrar</Button>
            </RegisterArea>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
};

export default Forum;