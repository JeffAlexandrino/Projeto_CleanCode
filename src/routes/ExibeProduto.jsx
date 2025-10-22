import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import produtosData from "../produtos.json";

export default function ProdutoExibe() {
  const [items] = useState(produtosData);

  const { id } = useParams();

  const produto = items.find(item => item.id === Number(id));

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Produtos #{id}</h2>
      <h3 className="mb-3 text-xl font-semibold text-gray-700">{produto.name}</h3>
      <p className="mb-6">R$ {produto.price}</p>
      <Link to="/produtos" className="text-sm text-teal-600 hover:text-red-700">
        Voltar
      </Link>
    </div>
  );
}
