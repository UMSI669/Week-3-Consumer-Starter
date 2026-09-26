
import { createContext, useContext, useState } from 'react';

const MaintenanceContext = createContext(null);

export function MaintenanceProvider({ children }) {
  const [items, setItems] = useState([
    { id: '1', name: 'Air conditioner' },
    { id: '2', name: 'Water heater' },
    { id: '3', name: 'Smoke detectors' },
  ]);

  function addItem(name) {
    const newItem = {
      id: Date.now().toString(),
      name: name.trim(),
    };

    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <MaintenanceContext.Provider value={{ items, addItem }}>
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance() {
  const context = useContext(MaintenanceContext);

  if (!context) {
    throw new Error('useMaintenance must be used inside MaintenanceProvider');
  }

  return context;
}