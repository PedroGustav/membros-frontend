import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    :root{
        --white: #FFFFFF;
        --black: #000000;
        --background: #FCFCFC;

        --primary: #0D4376;
        
        --text: #787878;
        --placeholder: #B9B9B9;

        --sucess: #3CCA0A;
        --yellow-warning: #FFD337;
        --red-error: #FF4337; 

    }

    html{

        @media (max-width: 1080px){
            font-size: 93.75%;
            /* 15 pixels */
        }

        @media (max-width: 720px){
            font-size: 87.5%;
            /* 14 pixels */
        }
        
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: var(---background);
    }

    button{
        cursor: pointer;
    }



`;