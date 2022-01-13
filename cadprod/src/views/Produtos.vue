<template>
  <div>
    <h2>Produtos</h2>

    <router-link :to="{ name: 'CadProduto', path: '/produtos' }">
      <button class="btn btn-outline-primary">Cadastro de Produtos</button>
    </router-link>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome do Produto</th>
          <th>Categoria</th>
          <th>Preço de custo</th>
          <th>Preço de venda</th>
          <th>EAN13</th>
          <th class="actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto of produtos" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.catNome }}</td>
          <td>{{ produto.preco_custo }}</td>
          <td>{{ produto.preco_venda }}</td>
          <td>{{ produto.ean13 }}</td>
          <td class="actions">
            <router-link
              :to="{ name: 'AlteraProduto', params: { id: produto.id } }"
            >
              <button class="btn btn-success btn-sm">
                Alterar
              </button>
            </router-link>
            <router-link :to="{ name: 'Produto' }">
              <button class="btn btn-danger btn-sm" @click="remove(produto)">
                Excluir
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Produto from "../domain/Produto";
import ProdutoService from "../domain/ProdutoService";

export default {
  data() {
    return {
      produtos: []
    };
  },
  created() {
    this.service = new ProdutoService(this.$resource);
    this.service.lista().then(
      produtos => (this.produtos = produtos),
      err => console.log(err)
    );
  },
  methods: {
    remove(produto) {
      if (confirm("Confirma exclusão?")) {
        this.service.apaga(produto.id).then(
          () => {
            let indice = this.produtos.indexOf(produto);
            this.produtos.splice(indice, 1);
            () => alert(`Produto ${produto.nome} removido com sucesso`);
          },
          err => {
            alert("Não foi possivel remover o produto");
            console.log(err);
          }
        );
      }
    }
  }
};
</script>

<style>
.controle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.2em;
  margin-bottom: 20px;
  gap: 10px;
}
</style>
