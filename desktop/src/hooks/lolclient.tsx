import React, { useState, useEffect, createContext, useContext } from 'react'
import { authenticate } from 'league-connect'
import axios from 'axios'

interface LOLClientProviderProps {
  children: React.ReactNode
}

interface LOLClientContext {
  clientData: string;
}

const LOLClientContext = createContext<LOLClientContext | null>(null)

export function LOLClientProvider ({ children }: LOLClientProviderProps) {
  const [clientData, setClientData] = useState('')

  useEffect(() => {
    createClientData()
  }, [])

  async function getCredentials () {
    try {
      const cred = await authenticate()

      return cred
    } catch (error) {
      console.log('[Get Credentials]: ' + error.message)
    }
  }

  async function getNgrokURL (port: string) {
    try {
      const { data } = await axios.get(`http://localhost:3000/ngrok/${port}`)

      return data
    } catch (error) {
      console.log('[Get Ngrok URL]: ' + error)
    }
  }

  async function createClientData () {
    const credentials = await getCredentials()
    const data = await getNgrokURL(JSON.stringify(credentials?.port))

    setClientData(JSON.stringify({
      ...credentials,
      url: data.url
    }))
  }

  return (
    <LOLClientContext.Provider value={{ clientData }}>
      {children}
    </LOLClientContext.Provider>
  )
}

export function useLOLClient (): LOLClientContext {
  const context = useContext(LOLClientContext)

  if (!context) {
    throw new Error('useLOLClient must be used within a LOLClientProvider')
  }

  return context
}
