import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;


    aside{
        background-color: #15C3D6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 10px;
        align-items: center;
        width: 8%;
        position: fixed;
        height: 100vh;
        img{
            margin-top: 32px;
            height: 56px;
        }

        a{
            margin-bottom: 32px;
            border-radius: 15px;
            background-color: #12AFCB;
            padding: 17px;
        }
    }


    main{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 92%;

        h5{
            font-family: Nunito;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            padding-top: 40px;
            padding-bottom: 40px;

            /* identical to box height, or 156% */

            /* Texts / Complementos */
            color: #8FA7B3;
        }

        .content{
            background-color: #fff;
            padding-top: 64px;
            padding-left: 80px;
            padding-right: 80px;
            padding-bottom: 64px;
            width: 708px;

            border: 1px solid #D3E2E5;
            box-sizing: border-box;
            border-radius: 20px;

            .divMapa{
                width: 547px;
                height: 291px;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 25px;
                text-align: center;
                width: 100%;
                background: #E6F7FB;
                border: 1px solid #B3DAE2;
                box-sizing: border-box;
                border-radius: 20px;
                color: #0089A5;
                
                .mapa{
                    background-color: #fff;
                    box-sizing: border-box;
                    border-radius: 20px;
                    width: 547px;
                    height: 227px;
                    border: 1px solid #DDE3F0;
                } 
                p{
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
            }

    
        }
    }

    h1{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 34px;
        color: #4D6F80;
        margin-bottom: 24px;
    }

    .divDados, .divVisitacao{
        border-top: 1px solid #D3E2E5;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
    }

    .divDados{
        margin-bottom: 80px;
    }
    label{
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 10px;
        margin-top: 40px;
        color: #8FA7B3;
    }

    input {
        background: #F5F8FA;
        width: 100%;
        /* Back / Lines in white */
        border: 1px solid #D3E2E5;
        box-sizing: border-box;
        border-radius: 20px;
        height: 42px;
    }


    .btnAtende{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    textarea{
        width: 548px;
        height: 120px;

        /* Inputs */
        background: #F5F8FA;

        /* Back / Lines in white */
        border: 1px solid #D3E2E5;
        box-sizing: border-box;
        border-radius: 20px;
    }

    .atende{
        all:unset;
        position:relative;
        width: 64px;
        height: 24px;
        background: #F5F8FA;
        border: 1px solid #D3E2E5;
        box-sizing: border-box;
        border-radius: 20px;

        margin-bottom: 10px;
        margin-top: 40px;
        cursor:pointer;
    }

    #inputFile{

        width: 96px;
        height: 96px;

        background: #F5F8FA;
        border: 1px dashed #96D2F0;
        box-sizing: border-box;
        border-radius: 20px;
    }

   

    .atende:after{
        content:"";
        position: absolute;
        width: 26px;
        height: 12px;
        background: #8FA7B3;
        border-radius: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .atende:checked{
        width: 64px;
        height: 24px;
        background: #39CC83;
        border-radius: 20px;
        cursor:pointer;
    }

    .atende:checked::after{
        width: 26px;
        height: 12px;
        margin-left: 32px;
        background: #FFFFFF;
        border-radius: 20px;
    }
`;