import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  user: string | null;
  setUser: (user: string) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
