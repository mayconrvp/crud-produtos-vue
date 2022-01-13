export default class Produto {
  constructor(
    nome = "",
    descricao = "",
    preco_custo = "",
    preco_venda = "",
    quantidade = "",
    ean13 = ""
  ) {
    (this.nome = nome),
      (this.descricao = descricao),
      (this.preco_custo = preco_custo),
      (this.preco_venda = preco_venda),
      (this.quantidade = quantidade),
      (this.ean13 = ean13);
  }
}
