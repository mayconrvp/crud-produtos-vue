class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarCategorias();
    this.criarProdutos();
  }

  criarCategorias() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Categorias (id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(60) NOT NULL, descricao VARCHAR(150), PRIMARY KEY(id))";
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela de Categorias criada com sucesso");
      }
    });
  }

  criarProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, id_categoria int NOT NULL, nome VARCHAR(100) NOT NULL, descricao VARCHAR(200), preco_custo DECIMAL(9,2), preco_venda DECIMAL(9,2), quantidade int NOT NULL, ean13 varchar(15), PRIMARY KEY(id), CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES cadprod.categorias (id))";
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Produtos criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
