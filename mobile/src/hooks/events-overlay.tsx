import React, { useState, createContext, useContext } from 'react'

interface EventsOverlayProviderProps {
  children: React.ReactNode
}

interface EventsOverlayContext {
  showMatchFinded: boolean;
  setShowMatchFinded(status: boolean): void;
  showReceivedInvitation: boolean;
  setShowReceivedInvitation(status: boolean): void;
}

const EventsOverlayContext = createContext<EventsOverlayContext | null>(null)

export function EventsOverlayProvider({ children }: EventsOverlayProviderProps) {
  const [showMatchFinded, setShowMatchFinded] = useState(false)
  const [showReceivedInvitation, setShowReceivedInvitation] = useState(false)

  // useMemo
  const values = {
    showMatchFinded, setShowMatchFinded,
    showReceivedInvitation, setShowReceivedInvitation
  }
  return (
    <EventsOverlayContext.Provider value={values}>
      {children}
    </EventsOverlayContext.Provider>
  )
}

export function useEventsOverlay(): EventsOverlayContext {
  const context = useContext(EventsOverlayContext)

  if (!context) {
    throw new Error('useEventsOverlay must be used within a EventsOverlayProvider')
  }

  return context
}
