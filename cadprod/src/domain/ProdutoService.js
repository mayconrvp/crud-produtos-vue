export default class ProdutoService {
  constructor(resource) {
    this._resource = resource("produtos{/id}");
  }

  lista() {
    return this._resource.query().then(res => res.json());
  }

  cadastra(produto) {
    if (produto.id) {
      console.log("Entrei no update");
      console.log(produto);
      return this._resource.update({ id: produto.id }, produto);
    } else {
      return this._resource.save(produto);
    }
  }

  apaga(id) {
    return this._resource.delete({ id });
  }

  busca(id) {
    return this._resource.get({ id }).then(res => res.json());
  }
}
