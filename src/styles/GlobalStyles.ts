import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        padding: 0px;
        width: auto;
    }
    body::-webkit-scrollbar{
        width: 5px;
        background-color: #e9ecef;
    }
    body::-webkit-scrollbar-thumb{
        background: linear-gradient(100deg, #cdb4db, #90e0ef);
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;