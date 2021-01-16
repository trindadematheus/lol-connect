import React from 'react'
import QRCode from 'react-qr-code'

import { useLOLClient } from '../../hooks/lolclient'
import * as S from './styles'

const Home: React.FC = () => {
  const { clientData } = useLOLClient()

  return (
    <>
      <S.Container>
        {clientData === '' ? (
          <button>reconectar</button>
        ) : (
            <S.QRCodeSection>
              <h2>Leia o QRCode no celular<br /> para conectar</h2>
              <S.QRCodeWrapper>
                <QRCode value={clientData} />
              </S.QRCodeWrapper>
            </S.QRCodeSection>
          )}
      </S.Container>
    </>
  )
}

export default Home
