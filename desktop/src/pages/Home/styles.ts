import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('https://lolstatic-a.akamaihd.net/frontpage/apps/prod/clash-2018/pt_BR/a46e742ae82f9d4f9db8e34ba57873e513e727b7/assets/static/img/backgrounds/triumph-bg.jpg');
  background-position: center;
  background-color: black;
  height: 100vh;
  color: white;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    line-height: 4.5rem;
    margin-bottom: 2.5rem;
    font-size: 5rem;
    font-family: 'lolfont';
  }

  button {
    background: black;
    border: 2px solid #D5B26E;
    color: #D5B26E;
    font-family: 'lolfont';
    height: 40px;
    width: 150px;
    cursor: pointer;
    transition: 0.4s;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: #ecc572 ;
      color: black;
      transition: 0.4s;
    }
  }
`

export const ConnectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QRCodeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QRCodeWrapper = styled.div`
  background: white;
  padding: 0.625rem;
  border: 0.25rem solid #815500;

  display: inline-block;
`