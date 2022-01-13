<template>
  <div id="app">
    <Menu />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu/Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #000b16;
}

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
  color: #165a88;
}
</style>
