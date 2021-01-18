import React, { useState, createContext, useContext, useEffect } from 'react'
import io from 'socket.io-client';
import axios from 'axios'

import { Summoner } from '../types/api'
import { useEventsOverlay } from './events-overlay';

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

  const { showMatchFinded, setShowMatchFinded } = useEventsOverlay()

  useEffect(() => {
    if (ngrokLink == '') {
      return;
    }

    const socketClient = io(ngrokLink);

    socketClient.on('connect', () => console.log('connected'))

    socketClient.on("MATCH_FINDED", (data: any) => {
      if (data && data.playerResponse === 'None' && !showMatchFinded) {
        return setShowMatchFinded(true)
      }

      if (!data) {
        return setShowMatchFinded(false)
      }
    });
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
