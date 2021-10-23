<template>
  <div class="page">
    <Menu />
    <AnuncioTopo />
    <Body />
  </div>
</template>

<script>
import menu from "../components/menu.vue";
import anunciotopo from "../components/anunciotopo.vue";
import body from "../components/body.vue";

export default {
  name: "product",
  components: {
    Body: body,
    AnuncioTopo: anunciotopo,
    Menu: menu,
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
}
</style>
