import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};
