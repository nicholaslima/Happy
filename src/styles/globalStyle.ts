


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

    .whatsButton{
            margin-top: 64px;
            padding-top: 19px;
            padding-bottom: 19px;
            background:#37C77F;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            border-radius: 20px;

            p{
                color: #fff; 
                font-family: Nunito;
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 26px;
                width: 200px;
                margin-left: 10px;
            }
            transition: background-color 0.6s;
        }

        .whatsButton:hover{
                 background-Color: #3EE08F;
        }
`;