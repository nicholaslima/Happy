

import styled from 'styled-components';


export const Container = styled.div`
    
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    .aside{
        background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
        width: 30%;
        height: 100vh;
    }

    h1{
        font-weight: 800;
        font-size: 40px;
        line-height: 42px;
    }

    .description{
        margin-top: 25px;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 233px;
        margin-left: 60px;
        height: 100%;
    }

   img{
       margin-bottom: 35px;
   }
    header{
        margin-top: 40px;
    }

    footer{
        margin-bottom: 80px;
    }

    .button{
        padding: 20px;
        background-color: #15C3D6;
        border-radius: 20px;
        position: absolute;
        bottom: 55px;
        right: 55px;
        color: white;
        transition: background-color 0.6s;
        z-index: 10;
    }

    .button:hover{
        background-color: #17D6EB;
    }

    .mapa{
        width: 70%;
        z-index: 5;
    }
`;