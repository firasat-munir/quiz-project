import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        background-image: url(background.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }

    body {
        margin: 0;
        padding: 0 20px;
        display flex;
        justify-content: center;
        text-align:center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Silkscreen', cursive;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
    text-align:center;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;
    text-align:center;
  }
  h1 {
    font-family: 'Silkscreen', cursive;
    background-image: linear-gradient(180deg, #fff, #000);
    font-weight: 100;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #000);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
  .footer{
    position:absolute;
    top: 95%;
  }
  .footer>p{
    font-size: 12px;
    color: #fae2d9;
  }
  .footer>p>a{
    color: #fae2d9;
  }
`;