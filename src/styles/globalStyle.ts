


import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
    }

    body,input,button,textarea{
        -webkit-font-smoothing: antialiased;
        font-family: Nunito, Sans-serif;
        font-size: 18px;
        font-weight: 600;
    } 

    body{
        color: #fff;
        background-color: #EBF2F5;
    }


`;