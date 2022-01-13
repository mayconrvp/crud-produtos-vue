import Home from "./views/Home.vue";
import Produtos from "./views/Produtos.vue";
import Categorias from "./views/categorias.vue";
import CadastroProduto from "./views/cadastros/CadastroProduto.vue";
import CadastroCategoria from "./views/cadastros/CadastroCategoria.vue";

export const routes = [
  { path: "", name: "home", component: Home, menu: true },
  {
    path: "/categorias",
    name: "Categoria",
    component: Categorias,
    menu: true
  },
  {
    path: "/produtos",
    name: "Produto",
    component: Produtos,
    menu: true
  },
  {
    path: "/cadCategoria/:id",
    name: "Altera",
    component: CadastroCategoria,
    menu: false
  },
  {
    path: "/cadProduto/:id",
    name: "AlteraProduto",
    component: CadastroProduto,
    menu: false
  },
  {
    path: "/cadCategoria",
    name: "CadCategoria",
    component: CadastroCategoria,
    menu: false
  },
  {
    path: "/cadProduto",
    name: "CadProduto",
    component: CadastroProduto,
    menu: false
  },
  { path: "*", component: Home, menu: false }
];
