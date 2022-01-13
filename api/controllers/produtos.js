const Produto = require("../models/produtos");

module.exports = (app) => {
  app.get("/produtos", (req, res) => {
    Produto.lista()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    Produto.buscaPorId(id)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.post("/produtos", (req, res) => {
    const produto = req.body;
    Produto.adiciona(produto)
      .then((produtoCadastrado) => {
        res.status(201).json(produtoCadastrado);
      })
      .catch((erros) => res.status(400).json(erros));
  });

  app.put("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Produto.altera(id, valores)
      .then(() => res.status(200).json({ ...valores, id }))
      .catch((erros) => res.status(400).json(erros));
  });

  app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Produto.deleta(id)
      .then((resultados) => res.status(200).json({ id }))
      .catch((erros) => res.status(400).json(erros));
  });
};
