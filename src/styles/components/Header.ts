import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    top: 0;
    right: 0;
    left: 0;
    height: 75px;
    width: 100%;
    background: linear-gradient(150deg, #90e0ef, #cdb4db);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`;
export const Title = styled.h1`
    font-size: 40px;
    color: #012a4a;
    font-style: italic;
    font-family: Lobster;
`;
export const ContentRoutes = styled.div`
    display: flex;
    height: 100%;
    width: 250px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const RoutesMenu = styled(Link)`
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    transition: all 0.5s linear;
    &:hover{
        cursor: pointer;
        transition: all 1s linear;
        color: #72efdd;
    }
`;