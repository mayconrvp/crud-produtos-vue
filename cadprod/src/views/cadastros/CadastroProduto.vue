<template>
  <div>
    <form @submit.prevent="grava()">
      <div class="mb-2 form-group">
        <label for="produto" class="form-label">Nome do Produto</label>
        <input
          type="text"
          name="produto"
          class="form-control"
          placeholder="Digite o nome do produto"
          v-model="produtoEdit.nome"
        />
      </div>
      <div class="mb-2 form-group">
        <label class="form-check-label" for="descricao">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          name="descricao"
          rows="3"
          placeholder="Digite a descrição do produto"
          v-model="produtoEdit.descricao"
        />
      </div>
      <div class="mb-2 form-group">
        <label for="category" class="form-label">Categoria</label>
        <select
          name="category"
          class="form-select"
          style="width: 20rem"
          aria-label="Default select example"
          v-model="produtoEdit.id_categoria"
        >
          <option value="">Selecione a categoria do produto</option>
          <option
            v-for="categoria of categorias"
            :key="categoria.id"
            :value="categoria.id"
            >{{ categoria.nome }}</option
          >
        </select>
      </div>
      <div class="mb-2 form-group">
        <label class="form-check-label" for="quantidade">Quantidade</label>
        <input
          class="form-control"
          style="width: 20rem"
          type="text"
          placeholder="Insira a quantidade"
          v-model="produtoEdit.quantidade"
        />
      </div>
      <div class="mb-2 form-group">
        <label class="form-check-label" for="ean13">EAN13</label>
        <input
          name="ean13"
          class="form-control"
          style="width: 20rem"
          type="text"
          placeholder="Insira o código de barras"
          v-model="produtoEdit.ean13"
        />
      </div>
      <div class="mb-2 form-group">
        <label class="form-check-label" for="preco_custo">Preço de Custo</label>
        <input
          name="preco_custo"
          class="form-control"
          style="width: 20rem"
          type="text"
          v-model="produtoEdit.preco_custo"
        />
      </div>
      <div class="mb-2 form-group">
        <label class="form-check-label" for="preco_venda">Preço de Venda</label>
        <input
          name="preco_venda"
          class="form-control"
          style="width: 20rem"
          type="text"
          v-model="produtoEdit.preco_venda"
        />
      </div>
      <div class="mb-3 form-group">
        <button type="submit" class="btn btn-primary">Salvar</button>

        <button type="button" class="btn btn-danger" v-on:click="limpar()">
          Limpar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Produto from "../../domain/Produto";
import ProdutoService from "../../domain/ProdutoService";

export default {
  data() {
    return {
      produtos: [],
      categorias: [],
      produtoEdit: new Produto(),
      id: this.$route.params.id
    };
  },

  created() {
    this.$http.get("http://localhost:3000/categorias").then(res => {
      res.json().then(categorias => (this.categorias = categorias));
    });
    this.service = new ProdutoService(this.$resource);

    if (this.id) {
      this.service
        .busca(this.id)
        .then(produto => (this.produtoEdit = produto[0]));
    }
  },
  methods: {
    grava() {
      this.service.cadastra(this.produtoEdit).then(
        () => {
          if (this.id) {
            this.$router.push({ name: "Produto" })(
              (this.produtoEdit = new Produto())
            );
          }
          alert("Cadastrado com sucesso");
          this.$router.push({ name: "Produto" });
        },
        err => {
          console.log(err);
          alert("Não foi possível cadastrar o produto.");
        }
      );
    },
    limpar() {
      this.produtoEdit = new Produto();
    }
  }
};
</script>

<style></style>
