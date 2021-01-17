import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'

interface LOLClientProviderProps {
  children: React.ReactNode
}

interface LOLClientContext {
  ngrokLink: string;
  getNgrokLink(): void;
}

const LOLClientContext = createContext<LOLClientContext | null>(null)

export function LOLClientProvider({ children }: LOLClientProviderProps) {
  const [ngrokLink, setNgrokLink] = useState('')

  useEffect(() => {
    getNgrokLink()
  }, [])

  async function getNgrokLink() {
    try {
      const { data } = await axios.get('http://localhost:3000/ngrok')

      setNgrokLink(data.url)
    } catch (error) {
      alert(error.response.data.error)
      console.log({ error })
    }
  }

  return (
    <LOLClientContext.Provider value={{ ngrokLink, getNgrokLink }}>
      {children}
    </LOLClientContext.Provider>
  )
}

export function useLOLClient(): LOLClientContext {
  const context = useContext(LOLClientContext)

  if (!context) {
    throw new Error('useLOLClient must be used within a LOLClientProvider')
  }

  return context
}
