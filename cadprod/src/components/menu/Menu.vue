<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <a href="" class="navbar-brand mx-2">Produts Project</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#nav-target"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nav-target">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link to="/categorias" class="nav-link">
            Categorias
          </router-link>
        </li>
        <li>
          <router-link to="/produtos" class="nav-link"> Produtos </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
