import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: #e9ecef;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    padding: 20px 20px;
    width: 100%;
    height: 100%;
    background-color: #e9ecef;
`;
export const Img = styled.img`
    width: 550px;
    height: 550px;
    margin-right: 25px;
`;
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 350px;
    padding: 10px 35px;
`;
export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #012a4a;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
`;
export const Text = styled.p`
    text-align: justify;
    font-size: 22px;
    font-variant: normal;
    font-style: oblique;
    font-weight: 400;
    color: #03045e;
    font-family: 'Roboto', sans-serif;
`;