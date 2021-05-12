import styled, { css } from 'styled-components';
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { GiBrazilFlag } from 'react-icons/gi';

const IconsFooter = css`
    width: 50px;
    font-size: 50px;
    color: #f8f9fa;
    transition: all 1.5s linear;
    &:hover{
        transition: all 1s linear;
        color: #7400b8;
        opacity: 0.7; 
    }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #bdb2ff;
    padding-top: 30px;
    width: 100%;
    height: 250px;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;
export const SocialNetworkContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`;
export const Line = styled.span`
    width: 55%;
    border-bottom: 2px solid #ffffff;
    margin-bottom: 15px;
`;
export const Text = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #1b4332;
    font-family: Lobster;
    font-style: italic;
`;
export const Description = styled.h2`
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 400;
`;
export const Links = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.7s linear;
    &:hover{
        cursor: pointer;
        transition: all 0.7s linear;
    }
`;
export const InstagramIcon = styled(AiOutlineInstagram)`${IconsFooter}`;
export const FacebookIcon = styled(AiOutlineFacebook)`${IconsFooter}`;
export const TwitterIcon = styled(AiFillTwitterCircle)`${IconsFooter}`;
export const BrazilIcon = styled(GiBrazilFlag)`
    width: 80px;
    font-size: 80px;
    color: #679436;
`;
