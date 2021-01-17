import React, { useState, createContext, useContext, useEffect } from 'react'
import io from 'socket.io-client';
import axios from 'axios'

import { Summoner } from '../types/api'

interface LOLClientProviderProps {
  children: React.ReactNode
}

interface LOLClientContext {
  ngrokLink: string;
  setNgrokLink(link: string): void;
  getCurrentSummoner(): Promise<Summoner | undefined>;
}

const LOLClientContext = createContext<LOLClientContext | null>(null)

export function LOLClientProvider({ children }: LOLClientProviderProps) {
  const [ngrokLink, setNgrokLink] = useState('')
  const [socket, setSocket] = useState<SocketIOClient.Socket | {}>({})

  useEffect(() => {
    if (ngrokLink == '') {
      return;
    }

    console.log('ajsndjklças')
    const socketClient = io('http://4a83fa3f5eb5.ngrok.io');
    console.log(socketClient)

    socketClient.on('connect', () => console.log('connected'))
    // setSocket(socketClient)

    // socketClient.on("MATCH_FINDED", () => {
    //   console.log('achou')
    // });
  }, [ngrokLink])

  async function getCurrentSummoner(): Promise<Summoner | undefined> {
    try {
      const { data } = await axios.get<Summoner>(`${ngrokLink}/lol-client/current-summoner`)

      return data;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LOLClientContext.Provider value={{ ngrokLink, setNgrokLink, getCurrentSummoner }}>
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
