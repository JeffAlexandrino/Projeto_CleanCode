import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const livros = [
  {titulo: ""},
  {
    titulo: "Guia do Mochilheiro das Galáxias",
    autor: "Douglas Adams",
    categoria: "Ficção Científica",
    preco: 29.90
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    categoria: "Ficção",
    preco: 12.99
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasia",
    preco: 15.50
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    categoria: "Realismo Mágico",
    preco: 9.99
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    categoria: "Clássico",
    preco: 11.25
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    categoria: "Fantasia",
    preco: 14.75
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ficção Distópica",
    preco: 10.99
  },
  {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    categoria: "Ficção Absurda",
    preco: 8.50
  },
];

export default function BookForm() {
  let { id } = useParams();
  let { livro, setlivro } = useState({});

  if (id !== undefined && id !== null) {
    livro = livros[id];
  } else {
    livro = livros[0];
  }

  return (
    <div className="p-6">
      <form className="mx-auto max-w-sm">
        <h4 className="text-4xl mb-6 font-extrabold">{id ? `Editar Livro ${id}` : "Cadastrar Livro"}</h4>
        
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Título:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={livro.titulo}
            placeholder="Digite o Título"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Autor:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={livro.autor}
            placeholder="Digite o Autor"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Categoria:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={livro.categoria}
            placeholder="Digite a Categoria"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Preço:</label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={livro.preco}
            placeholder="Digite o Preço"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Data de Lançamento:</label>
          <input
            type="date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Data de Lançamento"
            required
          />
        </div>

        <NavLink
          to="/books"
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Salvar
        </NavLink>
      </form>
    </div>
  );
}
