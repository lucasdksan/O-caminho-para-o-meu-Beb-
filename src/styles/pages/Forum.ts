import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

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
export const SearchArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 5px 5px;
    margin-bottom: 20px;
    height: 50px;
    width: 40%;
`;
export const Input = styled.input`
    height: 40px;
    width: 95%;
    border: none;
    background-color: #fff;
    padding: 10px 10px;
    text-decoration: none;
    color: #000;
    &:focus{
       color: #000; 
    }
`;
export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 60px;
    border: none;
    transition: all 0.7s linear;
    background-color: #ade8f4;
    &:hover{
        cursor: pointer;
        transition: all 0.7s linear;
        background-color: #03045e;
        color: #fff;
        opacity: 0.7; 
    }
`;
export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 20px;
`;
export const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #012a4a;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
`;
export const RegisterArea = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 750px;
    padding: 10px 30px;
    margin-bottom: 10px;
`;
export const SearchResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #e9ecef;
    padding: 5px 10px;
    margin-bottom: 10px;
    width: 750px;
`;
export const Target = styled.span`
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 5px;
    margin-left: 10px;
    color: #03045e;
`;
export const InputForm = styled.input`
    height: 40px;
    width: 100%;
    border: none;
    background-color: #bdb2ff;
    text-decoration: none;
    padding: 20px 10px;
    color: #000;
`;
export const AreaInput = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;
export const TextArea = styled.textarea`
    height: 200px;
    width: 100%;
    border: none;
    background-color: #bdb2ff;
    text-decoration: none;
    padding: 10px 10px;
    color: #000;
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ade8f4;
    font-family: 'Times New Roman', Times, serif;
    height: 50px;
    width: 200px;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    transition: all 0.7s linear;
    font-size: 20px;
    &:hover{
        cursor: pointer;
        transition: all 0.5s linear;
        background-color: #03045e;
        color: #fff;
        opacity: 0.7; 
    }
`;