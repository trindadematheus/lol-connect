import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'

import agent from '../utils/agent'

import api from '../services/api'

interface LOLClientProviderProps {
  children: React.ReactNode
}

export interface Credentials {
  url: string;
  password: string;
  pid: number;
  port: number;
}

interface LOLClientContext {
  credentials: Credentials;
  setCredentials(cred: Credentials): void;
  getCurrentSummoner(): void;
}

const LOLClientContext = createContext<LOLClientContext | null>(null)

export function LOLClientProvider({ children }: LOLClientProviderProps) {
  const [credentials, setCredentials] = useState<Credentials>({
    password: '',
    url: '',
    pid: 0,
    port: 0
  })

  async function getCurrentSummoner() {
    api(credentials).get('/lol-summoner/v1/current-summoner', {
      httpsAgent: agent
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(e => console.log(e))
  }

  return (
    <LOLClientContext.Provider value={{ credentials, setCredentials, getCurrentSummoner }}>
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
