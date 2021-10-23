<template>
  <div class="page">
    <!-- <Menu />
    <AnuncioTopo />
    <Body /> -->
    <Home />
  </div>
</template>

<script>
// import menu from "./components/menu.vue";
// import anunciotopo from "./components/anunciotopo.vue";
// import body from "./components/body.vue";
import home from './pages/Home.vue';

export default {
  name: "App",
  components: {
    Home: home
    // Body: body,
    // AnuncioTopo: anunciotopo,
    // Menu: menu,
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
}
</style>
