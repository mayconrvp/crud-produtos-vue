const res = require("express/lib/response");
const conexao = require("../infraestrutura/database/conexao");
const repositorio = require("../repositorios/categorias");

class Categoria {
  constructor() {
    this.categoriaValida = (tamanho) => tamanho >= 4;

    this.validacoes = [
      {
        nome: "categoria",
        valido: this.categoriaValida,
        mensagem: "A categoria não pode ter menos de 4 caracteres.",
      },
    ];

    this.valida = (parametros) => {
      this.validacoes.filter((campo) => {
        const { nome } = campo;
        const parametro = parametros[nome];

        return !campo.valido(parametros);
      });
    };
  }

  adiciona(categoria) {
    // const parametros = {
    //   categoria: { tamanho: categoria.nome.length },
    // };

    // const erros = this.valida(parametros);
    // const existemErros = erros.length;

    // if (existemErros) {
    //   return new Promise((resolve, reject) => reject(erros));
    // } else {
    return repositorio.adiciona(categoria).then((resultados) => {
      const id = resultados.insertId;
      return { ...categoria, id };
    });
    // }
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

module.exports = new Categoria();
