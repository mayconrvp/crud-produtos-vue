<template>
  <div>
    <h1 class="mb-5">Gestão de Produtos</h1>

    <div class="row justify-content-start">
      <div class="card col-3 mx-2">
        <div class="card-body">
          <router-link
            :to="{ name: 'CadCategoria' }"
            style="text-decoration: none"
          >
            <img
              src="../assets/icons/bookmark-check.svg"
              alt=""
              class="mb-2 card-btn"
            />
            <h5>Cadastro de Categoria</h5>
          </router-link>
        </div>
      </div>
      <div class="card col-3 mx-2">
        <div class="card-body">
          <router-link
            :to="{ name: 'CadProduto' }"
            style="text-decoration: none"
          >
            <img
              src="../assets/icons/file-earmark-plus.svg"
              alt=""
              class="mb-2 card-btn"
            />
            <h5>Cadastro de Produtos</h5>
          </router-link>
        </div>
      </div>
    </div>

    <br />
    <h4>Filtro:</h4>

    <div class="col-lg-4">
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Nome ou categoria"
          v-model="search"
        />
        <span class="input-group-btn">
          <button
            class="btn btn-outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Limpar filtro"
            @click="limparFiltro"
          >
            <img src="../assets/icons/x-lg.svg" style="width: 20px" alt="" />
          </button>
        </span>
      </div>
    </div>

    <div class="row">
      <ul class="list-group">
        <li
          v-for="produto of itensFiltrados"
          :key="produto.id"
          class="list-group-item"
        >
          <strong>Produto:</strong> {{ produto.nome }} -
          <strong>Categoria:</strong> {{ produto.catNome }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: [],
      search: "",
    };
  },
  created() {
    this.$http.get("http://localhost:3000/produtos").then((res) => {
      res.json().then((produtos) => (this.produtos = produtos));
    });

    this.$http.get("http://localhost:3000/categorias").then((res) => {
      res.json().then((categorias) => (this.categorias = categorias));
    });
  },
  computed: {
    itensFiltrados() {
      let valores = [];
      valores = this.produtos.filter((item) => {
        return (
          item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.catNome.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      return valores;
    },
  },
  methods: {
    limparFiltro() {
      this.search = "";
    },
  },
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000224;
}

.card-btn {
  width: 50px;
  display: block;
  margin: 0 auto;
  text-decoration: none;
}
</style>
