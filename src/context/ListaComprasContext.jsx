import { useEffect, useState, useContext, createContext } from "react";

/**
 * Contexto global para gerenciar a lista de compras.
 * Centraliza o estado e fornece acesso via hook `useShoppingList`.
 * Também realiza persistência automática no localStorage.
 */

const ShoppingListContext = createContext(undefined);

const STORAGE_KEY = "shopping_list_items";

export function ShoppingListProvider({ children }) {
  const [items, setItems] = useState([]);

  // Carrega itens salvos ao iniciar
  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      try {
        setItems(JSON.parse(storedItems));
      } catch {
        console.warn("Falha ao ler itens do localStorage.");
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Atualiza o localStorage sempre que os itens mudam
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return (
    <ShoppingListContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error("useShoppingList deve ser usado dentro de ShoppingListProvider");
  }
  return context;
}

export function generateId() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2, 11);
}
