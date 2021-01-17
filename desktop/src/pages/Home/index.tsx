import React, { useState } from 'react'
import QRCode from 'react-qr-code'

import { useLOLClient } from '../../hooks/lolclient'
import * as S from './styles'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const { ngrokLink, getNgrokLink } = useLOLClient()

  const handleConnect = async () => {
    setLoading(true)
    await getNgrokLink()
    setLoading(false)
  }

  return (
    <>
      <S.Container>
        {ngrokLink === '' ? (
          <S.ConnectSection>
            <h2>Conectar ao<br /> League of Legends</h2>
            <button onClick={handleConnect}>
              {loading ? (
                <div className="boxLoading">
                  <div className="coinLoading"></div>
                </div>
              ) : 'CONECTAR'}
            </button>
          </S.ConnectSection>
        ) : (
            <S.QRCodeSection>
              <h2>Leia o QRCode no celular<br /> para conectar</h2>
              <S.QRCodeWrapper>
                <QRCode value={ngrokLink} />
              </S.QRCodeWrapper>
            </S.QRCodeSection>
          )}
      </S.Container>
    </>
  )
}

export default Home
