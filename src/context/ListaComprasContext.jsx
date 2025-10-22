import { useEffect, useState, useContext, createContext } from "react";

/**
O Context centraliza estados para serem acessados globalmente pelos componentes via useContext, sem precisar passar props.
 */

const ListaComprasContext = createContext([[], () => {}]);

export function ListaComprasProvider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsData = localStorage.getItem("items");
    const items = itemsData ? JSON.parse(itemsData) : [];
    setItems(items);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  return <ListaComprasContext.Provider value={[items, setItems]} {...props} />;
}

export function useListaCompras() {
  const context = useContext(ListaComprasContext);
  if (context === undefined) {
    throw new Error(`useListaCompras must be used within a ListaComprasProvider`);
  }
  return context;
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
