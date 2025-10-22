import { useState } from "react";

import { useListaCompras, generateId } from "../context/ListaComprasContext";

export default function ListaCompras() {
  const [items, setItems] = useListaCompras();
  const [errorMessage, setErrorMessage] = useState("");

  function addItem(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get("newItemName") !== "" && +formData.get("newItemQtd") > 0) {
      const newItem = {
        id: generateId(),
        name: formData.get("newItemName"),
        qtd: +formData.get("newItemQtd"),
      };

      setItems([...items, newItem]);

      form.reset();
      setErrorMessage("");
    } else {
      setErrorMessage("Preencha todos os campos!");
    }
  }

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Lista de Compras</h2>
      <ul className="mx-5 my-4 list-disc">
        {items.map(item => (
          <li key={item.id} className="py-px">
            <strong>{item.name}</strong> - {item.qtd}
          </li>
        ))}
      </ul>
      {items.length === 0 && <p className="font-semibold text-gray-600">Nenhum item adicionado até o momento</p>}
      <form onSubmit={addItem} method="get" className="mt-6 w-full max-w-md rounded bg-gray-100 p-3.5">
        <div className="mb-4">
          <label htmlFor="newItemName" className="block text-gray-600">
            Nome do Produto
          </label>
          <input
            id="newItemName"
            name="newItemName"
            type="text"
            className="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newItemQtd" className="block text-gray-600">
            Quantidade
          </label>
          <input
            id="newItemQtd"
            name="newItemQtd"
            type="number"
            defaultValue={1}
            min="1"
            className="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
          />
          {!!errorMessage && <div className="mt-1 font-semibold text-red-500">{errorMessage}</div>}
        </div>
        <button type="submit" className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">
          Adicionar Item
        </button>
      </form>
    </div>
  );
}
