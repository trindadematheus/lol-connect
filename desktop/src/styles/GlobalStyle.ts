import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   @font-face {
     font-family: "lolfont";
     src: url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.eot");
     src: url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.eot?#iefix") format("embedded-opentype"),
     url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.woff2") format("woff2"),
     url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.woff") format("woff"),
     url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.ttf") format("truetype"),
     url("//db.onlinewebfonts.com/t/12420e8c141ca7c3dff41de2d59df13e.svg#BeaufortforLOL-Bold") format("svg"); }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }

  .boxLoading {
    perspective: 120px;
  }

  .coinLoading {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 4px solid #D5B26E;
    animation: spin 1.5s ease-in-out infinite;

    :hover {
      border: 4px solid black;
    }
  }

  @keyframes spin {
    to {
      transform: rotateY(540deg);
    }
  }
`
