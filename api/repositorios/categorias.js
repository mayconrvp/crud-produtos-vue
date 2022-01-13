const query = require("../infraestrutura/database/queries");

class Categoria {
  adiciona(categoria) {
    const sql = "INSERT INTO Categorias SET ?";
    return query(sql, categoria);
  }

  lista() {
    const sql = "SELECT * FROM Categorias";
    return query(sql);
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Categorias WHERE id=${id}`;
    return query(sql);
  }

  altera(valores, id) {
    const sql = "UPDATE Categorias SET ? WHERE id=?";
    return query(sql, [valores, id]);
  }

  deleta(id) {
    const sql = "DELETE FROM Categorias Where id=?";
    return query(sql, id);
  }
}

module.exports = new Categoria();
