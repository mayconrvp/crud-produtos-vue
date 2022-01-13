<template>
  <div>
    <h2>Categorias</h2>
    <form @submit.prevent="grava()">
      <div class="mb-3 form-group">
        <label for="categoria" class="form-label">Categoria</label>
        <input
          type="text"
          name="nome"
          class="form-control"
          placeholder="Digite o nome do categoria"
          v-model="categoriaEdit.nome"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="descricao" class="form-label">Descricao</label>
        <input
          type="text"
          class="form-control"
          name="descricao"
          placeholder="Digite a descrição da categoria"
          v-model="categoriaEdit.descricao"
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
import Categoria from "../../domain/Categoria";
import CategoriaService from "../../domain/CategoriaService";
// import { required } from "vuelidate/lib/validators"

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

    if (this.id) {
      this.service.busca(this.id).then(
        categoria => (this.categoriaEdit = categoria[0]),
        err => console.log(err)
      );
    }
  },
  methods: {
    grava() {
      this.service.cadastra(this.categoriaEdit).then(
        () => {
          if (this.id)
            this.$router.push({ name: "Categoria" })(
              (this.categoriaEdit = new Categoria())
            );
          alert("Cadastrado com sucesso");
          this.$router.push({ name: "Categoria" });
        },
        err => console.log(err)
      );
    },
    limpar() {
      this.categoriaEdit = new Categoria();
    }
  }
};
</script>

<style></style>
