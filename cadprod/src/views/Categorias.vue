<template>
  <div>
    <h2>Categorias</h2>

    <div>
      <router-link :to="{ name: 'CadCategoria', path: '/categorias' }">
        <button class="btn btn-outline-primary">Cadastro de Categorias</button>
      </router-link>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Categoria</th>
          <th class="actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria of categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.nome }}</td>
          <td class="actions">
            <router-link :to="{ name: 'Altera', params: { id: categoria.id } }">
              <button class="btn btn-success btn-sm">
                Alterar
              </button>
            </router-link>

            <router-link :to="{ name: 'Categoria' }">
              <button class="btn btn-danger btn-sm" @click="remove(categoria)">
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
import Categoria from "../domain/Categoria";
import CategoriaService from "../domain/CategoriaService";

export default {
  data() {
    return {
      categorias: [],
      categoriaEdit: new Categoria(),
      id: this.$route.params.id
    };
  },
  created() {
    this.service = new CategoriaService(this.$resource);

    this.service.lista().then(
      categorias => (this.categorias = categorias),
      err => console.log(err)
    );
  },
  methods: {
    remove(categoria) {
      if (confirm("Confirma exclusão?")) {
        this.service.apaga(categoria.id).then(
          () => {
            let indice = this.categorias.indexOf(categoria);
            this.categorias.splice(indice, 1);
            () => alert(`Categoria ${categoria.nome} removida com sucesso`);
          },
          err => {
            alert("Não foi possivel remover a categoria");
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
