import React from 'react'
import QRCode from 'react-qr-code'

import { useLOLClient } from '../../hooks/lolclient'

const Home: React.FC = () => {
  const { clientData } = useLOLClient()

  return (
    <>
      {
        clientData === '' ? (
          <button>Reconectar</button>
        ) : (
          <QRCode value={clientData} />
        )
      }
    </>
  )
}

export default Home
