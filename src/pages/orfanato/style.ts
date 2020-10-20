

import styled from 'styled-components';
import Child from '../../images/child5.jpg';
import CHild1 from '../../images/child4.jpg';

export const Container = styled.div`
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
        width: 92%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .description{
            display: flex;
            flex-direction: column;
        }
    }

    .content{
        background-color: #fff;
        width: 708px;
        display: flex;
        flex-direction:column;
        align-items: center;
        box-sizing: border-box;
       
        border-radius: 20px;
    }

    .divFotos{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 65px;
        .fotoPrincipal{
            width: 100%;
            height: 336px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-image: url(${ Child });
            background-repeat: no-repeat;
            background-size: 100px 336px;
            background-size: cover;
            background-origin: content-box;
        }

        .fotos{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            height: 94px;
            margin-top: 24px;
            .fotoPequena{
                background-image: url(${ CHild1 });
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                margin-right: 10px;
                border-radius: 20px;
            }
        }
    }

    .description{
        display: flex;
        flex-direction:column;
        padding-left: 80px;
        padding-right: 80px;
        h1{
            font-style: normal;
            font-weight: bold;
            font-size: 54px;
            line-height: 54px;
            margin-bottom: 32px;
        }

        p{
            margin-bottom: 64px;
        }

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

    footer{
        border-top: 1px solid #D3E2E5;
        margin-top: 64px;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
  
        #visite{
            margin-top: 24px;
        }

        .cards{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            margin-top: 24px;

            .card-info{
                background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
                border: 1px solid #B3DAE2;
                color:#15C3D6;
                margin-right: 20px;
                p{
                    color:#5C8599;
                }
            }

            .card-success{
                background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
                border: 1px solid #A1E9C5;
                color:#37C77F;
                p{
                    color:#37C77F;
                }
            }    
            .card-danger{
                background: linear-gradient(154.16deg, #FCF0F4 7.85%, #FFFFFF 91.03%);
                border: 1px solid #FFBCD4;
                color: #FF669D;
                p{
                    color: #FF669D;
                }
            }
        }

        .whatsButton{
            margin-top: 64px;
            padding-top: 19px;
            padding-bottom: 19px;
            background: #3CDC8C;
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
        }
    }

    h1,h3{
        color: #4D6F80;
        font-size: 36px;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;

        /* or 156% */

        /* Texts / Base */
        color: #5C8599;
    }

    h6{
        color: #8FA7B2;
        font-size: 18px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    
    .card{
        box-sizing: border-box;
        border-radius: 20px;
        padding: 32px;
        width: 100%;
        p{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            margin-top: 16px;
            width: 143px;
        }
    }
`;