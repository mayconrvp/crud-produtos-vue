const query = require("../infraestrutura/database/queries");

class Produto {
  adiciona(produto) {
    const sql = "INSERT INTO Produtos SET ?";
    return query(sql, produto);
  }

  lista() {
    const sql =
      "select p.id, p.id_categoria, p.nome, p.descricao, p.preco_custo, p.preco_venda, p.quantidade, p.ean13, c.nome as catNome from produtos p inner join categorias c on p.id_categoria = c.id;";
    return query(sql);
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Produtos WHERE id=${id}`;
    return query(sql);
  }

  altera(valores, id) {
    const sql = "UPDATE Produtos SET ? WHERE id=?";
    return query(sql, [valores, id]);
  }

  deleta(id) {
    const sql = "DELETE FROM Produtos Where id=?";
    return query(sql, id);
  }
}

module.exports = new Produto();
