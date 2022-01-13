const Categoria = require("../models/categorias");

module.exports = (app) => {
  app.get("/categorias", (req, res) => {
    Categoria.lista()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/categorias/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Categoria.buscaPorId(id)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.post("/categorias", (req, res) => {
    const categoria = req.body;

    Categoria.adiciona(categoria)
      .then((atendimentoCadastrado) =>
        res.status(201).json(atendimentoCadastrado)
      )
      .catch((erros) => res.status(400).json(erros));
  });

  app.put("/categorias/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Categoria.altera(id, valores)
      .then((resultados) => res.status(200).json({ ...valores, id }))
      .catch((erros) => res.status(400).json(erros));
  });

  app.delete("/categorias/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Categoria.deleta(id)
      .then((resultados) => res.status(200).json({ id }))
      .catch((erros) => res.status(400).json(erros));
  });
};
