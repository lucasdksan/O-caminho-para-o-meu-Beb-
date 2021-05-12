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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 20px 20px;
    width: 100%;
    height: 100%;
    background-color: #e9ecef;
`;
export const Img = styled.img`
    width: 800px;
    height: 500px;
    margin-bottom: 20px;
`;
export const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 35px;
`;
export const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 15px;
    font-weight: bold;
    color: #012a4a;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
`;
export const SubContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;
export const SubTitle = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #7209b7;
    width: 100px;
    margin-right: 50px;
`;
export const Description = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: italic;
    color: #00b4d8;
`;
