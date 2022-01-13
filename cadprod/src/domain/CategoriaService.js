export default class CategoriaService {
  constructor(resource) {
    this._resource = resource("categorias{/id}");
  }

  lista() {
    return this._resource.query().then(res => res.json());
  }

  cadastra(categoria) {
    if (categoria.id) {
      return this._resource.update({ id: categoria.id }, categoria);
    } else {
      return this._resource.save(categoria);
    }
  }

  apaga(id) {
    return this._resource.delete({ id });
  }

  busca(id) {
    return this._resource.get({ id }).then(res => res.json());
  }
}
