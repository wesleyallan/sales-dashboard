import { createContext, useReducer, useContext } from 'react';
import { Reducer, initialState } from './Reducer';

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, dispatch] = useReducer(Reducer, initialState);

  return (
    <SalesContext.Provider value={{ sales, dispatch }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => {
  const context = useContext(SalesContext);
  if (!context) throw new Error('useSales must be used within a SalesProvider');
  return context;
};
