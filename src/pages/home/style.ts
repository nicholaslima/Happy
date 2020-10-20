

import styled from 'styled-components';

import Img from '../../images/children.svg';

export  const Container = styled.div`
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    height: 100vh;
    
    .content{
        width: 100%;
        max-width: 980px;
        height: 100%;
        height: 580px;
        margin: 0 auto;
        padding-top: 60px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        background: url(${ Img }) 90% center no-repeat;
        background-size: 553px 473px;
    }
    
    #logo{
        width: 240px;
        height: 74px;
    }


    #header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        width: 100%;
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .titulo{
        font-weight: 900;
        font-size: 76px;
        line-height: 65px;
        max-width: 358px;
    }

    .footer{
        margin-top: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button{

    }
    span{
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        max-width: 358px;
        margin-top: 40px;
    }

    .button{
        position: absolute;

        padding: 25px;
        border-radius: 30px;
        background-color: #FFD666;
        color: #8D734B;
        border-width: 0px;

        right: 55px;
        bottom: 55px;
        border-radius: 30px;
        transition: background-color 0.7s
    }
    .button:hover{
        background-color: #96FEFF;
        transition: 0.7s;
    }
`;

