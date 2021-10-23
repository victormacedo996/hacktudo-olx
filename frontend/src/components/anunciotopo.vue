<template>
  <div class="anuncio">
    <img
      alt=""
      aria-hidden="true"
      class="image"
      src="../assets/anuncio/anuncio-garage-sale.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "anuncio",
  components: {},
};
</script>

<style>
.anuncio {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(229, 229, 229);
  margin: 20px 0 20px 0;
  height: 159px;
  width: 1272px;
  align-self: center;
}

.anuncio img {
  height: 159px;
  width: 1272px;
}
</style>