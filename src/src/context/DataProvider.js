import { createContext } from 'react';
import { useState } from 'react';
import sampleData from '../data/SampleData';

export const DataContext = createContext({ data: null });

const DataProvider = ({ children }) => {
  const [data, setData] = useState(sampleData);
    
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;