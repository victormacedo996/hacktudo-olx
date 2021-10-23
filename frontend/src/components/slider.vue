<template>
  <div class="container-slider">
    <div class="slider">
      <button @click="prev" class="btn btn-left">
        <img src="../assets/icon/chevron-left.svg" class="icon" />
      </button>

      <div
        class="container-slides"
        :style="{
          transform: `translateX(${index}px)`,
          transition: `${transition}`,
        }"
      >
        <img src="../assets/img1.jpg" alt="" class="img-slider" />
        <img src="../assets/img2.jpg" alt="" class="img-slider" />
        <img src="../assets/img3.jpg" alt="" class="img-slider" />
        <img src="../assets/img4.jpg" alt="" class="img-slider" />
      </div>

      <button @click="next" class="btn btn-right">
        <img src="../assets/icon/chevron-right.svg" class="icon" />
      </button>
    </div>
    <div class="side-list">
      <img src="../assets/img1.jpg" alt="" class="img-slider" />
      <img src="../assets/img2.jpg" alt="" class="img-slider" />
      <img src="../assets/img3.jpg" alt="" class="img-slider" />
      <img src="../assets/img4.jpg" alt="" class="img-slider" />
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  components: {},
  data: function () {
    return {
      index: 0,
      transition: "transform 0.2s ease",
    };
  },
  methods: {
    next() {
      // -1080 é a soma da largura dos itens excedentes.
      if (this.index === -1080) {
        this.index = 0;
      } else {
        this.index -= 360;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = -1080;
      } else {
        this.index += 360;
      }
    },
  },
};
</script>

<style>
.slider {
  width: 360px;
  height: 480px;
  margin: 100px auto 0;
  background: #000;
  overflow: hidden;
  position: relative;
}

.container-slides {
  display: flex;
}

.img-slider {
  width: 100%;
  height: auto;
}

.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.icon {
  width: 30px;
}

.btn-left {
  top: 50%;
  left: 5px;
  transform: translateY(-50);
}

.btn-right {
  top: 50%;
  right: 5px;
  transform: translateY(-50);
}

.container-slider {
  display: flex;
}

.side-list {
  margin: 100px auto 0;
  overflow: hidden;
  position: relative;
}

.side-list img {
  display: flex;
  height: 50px;
  width: 50px;
  top: 50%;
  left: 5px;
  transform: translateY(-50);
  z-index: 1000;
  cursor: pointer;
  padding: 5px;
}
</style>