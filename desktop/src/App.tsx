import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from './styles/GlobalStyle'

import { LOLClientProvider } from './hooks/lolclient'
import Home from './pages/Home'

const mainElement = document.createElement('div')

mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <LOLClientProvider>
        <GlobalStyle />
        <Home />
      </LOLClientProvider>
    </>
  )
}

render(<App />, mainElement)
