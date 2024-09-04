import { Link } from "react-router-dom";
import { useState } from "react";
import { tipoListaObj } from "../../type";

export default function Produtos() {
  // MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  // Verifica se o localStorage tem o item "lista" e parseia o JSON
  const produtos = JSON.parse(localStorage.getItem("lista"));
  const [produtosState] = useState<tipoListaObj[]>(produtos);

  return (
    <div>
      <h1>Lista de Produtos!</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Foto</th>
            <th>Editar | Excluir</th>
          </tr>
        </thead>
        <tbody>
          {produtosState.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.marca}</td>
              <td>{produto.categoria}</td>
              <td>{produto.descricao}</td>
              <td><img src={produto.imagem} alt={produto.nome} /></td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>
              Total de registros: <span>{produtosState.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
