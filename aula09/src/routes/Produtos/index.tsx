import { Link } from "react-router-dom";
import { ImgProdutos } from "../../style/styled";
// import { useState } from "react";
// import { TipoListaObj } from "../../types";
import { listaProdutos } from "../../listaProdutos";

export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

      // const listaProdutosString = localStorage.getItem("lista") || '[]';
      // // const lista = JSON.parse(listaProdutosString);
      // const [produtos] = useState<TipoListaObj[]>(JSON.parse(listaProdutosString));

    return(
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
              {listaProdutos.map((produto)=>(
                <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.categoria}</td>
                    <td>{produto.descricao}</td>
                    <td><ImgProdutos src={produto.imagem} alt={produto.nome} /></td>
                    <td>
                      <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
                    </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7}>
                Total de registros : <span>{listaProdutos.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  // id: 1,
  // nome: "Smartphone",
  // preco: 1500.00,
  // marca: "Apple",
  // categoria: "Celulares",
  // descricao: "Celular com tela de 6 polegadas e 4GB de RAM",
  // imagem:"/img/produtos-640×462.png",