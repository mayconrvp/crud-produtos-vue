const conexao = require("../infraestrutura/database/conexao");
const repositorio = require("../repositorios/produtos");

class Produto {
  adiciona(produto) {
    return repositorio.adiciona(produto).then((resultados) => {
      const id = resultados.insertId;
      return { ...produto, id };
    });
  }

  lista() {
    return repositorio.lista();
  }

  buscaPorId(id) {
    return repositorio.buscaPorId(id);
  }

  altera(id, valores) {
    return repositorio.altera(valores, id);
  }

  deleta(id) {
    return repositorio.deleta(id);
  }
}

module.exports = new Produto();
