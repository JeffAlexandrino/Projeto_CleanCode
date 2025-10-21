import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

import produtosData from "../produtos.json";

/**
 * Página de exibição de detalhes de um produto.
 * Exemplo de uso de parâmetros dinâmicos via React Router DOM (`useParams`).
 */
export default function ProdutoExibe() {
  const { id } = useParams();
  const produtoId = Number(id);

  // Busca o produto correspondente apenas quando o id muda
  const produto = useMemo(
    () => produtosData.find((item) => item.id === produtoId),
    [produtoId]
  );

  // Caso o produto não seja encontrado
  if (!produto) {
    return (
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Produto não encontrado
        </h2>
        <Link
          to="/produtos"
          className="text-sm text-teal-600 hover:text-red-700"
        >
          Voltar à lista de produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">
        Produto #{produto.id}
      </h2>
      <h3 className="mb-3 text-xl font-semibold text-gray-700">
        {produto.name}
      </h3>
      <p className="mb-6 text-gray-600">R$ {produto.price}</p>
      <Link
        to="/produtos"
        className="text-sm text-teal-600 hover:text-red-700"
      >
        Voltar à lista
      </Link>
    </div>
  );
}
