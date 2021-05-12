import styled from 'styled-components';
import { ImUser } from 'react-icons/im';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(150deg, #d8f3dc, #fcd5ce);
    width: 90%;
    margin-bottom: 10px;
    padding: 15px 25px;
`;
export const HeaderCard = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 60%;
    top: 0;
    right: 0;
    left: 0;
    margin-bottom: 10px;
`;
export const NameUser = styled.strong`
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-style: italic;
    color: #012a4a;
`;
export const Content = styled.p`
    text-align: justify;
    font-size: 20px;
    font-style: normal;
    color: #03045e;
`;
export const UserIcon = styled(ImUser)`
    font-size: 25px;
    color: #012a4a;
    margin-left: 10px;
`;
