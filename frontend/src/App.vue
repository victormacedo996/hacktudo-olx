<template>
  <div class="page">
    <!-- <Menu />
    <AnuncioTopo />
    <Body /> -->
    <Home />
    <!-- <Product /> -->
    <!-- <Carousel /> -->
  </div>
</template>

<script>
// import menu from "./components/menu.vue";
// import anunciotopo from "./components/anunciotopo.vue";
// import body from "./components/body.vue";
import home from './pages/Home.vue';
// import product from "./pages/product.vue";
// import slider from "./components/slider.vue";
//  import slider from "./components/carousel.vue";

export default {
  name: "App",
  components: {
    // Product: product
    // Carousel: slider,
    Home: home
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
}
</style>
