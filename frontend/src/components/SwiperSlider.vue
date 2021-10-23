<template>
  <div class="container-slides">
    <button @click="prev" class="btn btn-left">
      <img src="../assets/icon/chevron-left.svg" class="icon" />
    </button>
    <div v-for="(item, index) in responses" :key="index" class="slider">
      <swiper style=""
        :style="{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }"
        :loop="true"
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :allowTouchMove="false"
        class="mySwiper2">
        <swiper-slide>
          <img v-bind:src="item.image_url_0"/>
        </swiper-slide>
      </swiper>

      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="5"
        :slidesPerView="2"
        :freeMode="false"
        :watchSlidesProgress="true"
        :allowTouchMove="false"
        class="mySwiper">
          <swiper-slide>
            <img v-bind:src="item.image_url_1" />
          </swiper-slide>
          <swiper-slide>
            <img v-bind:src="item.image_url_2" />
          </swiper-slide>
      </swiper>
    </div>
    <button @click="next" class="btn btn-right">
      <img src="../assets/icon/chevron-right.svg" class="icon" />
    </button>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
  name: "slide",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      responses: [],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
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
    async fecthApi(){
      await axios
        .get('http://localhost:3000/catalogo')
        .then((response) => {
          this.responses = response.data[0].content
        })
        .catch((error) => {
          console.log(error)
        })

    }
  },
  mounted() {
    this.fecthApi();
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 30%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider {
  width: 250px;
  height: 250px;
  margin-left: 5px;
}

.container-slides {
  display: flex;
  width: 1185px;
  overflow: hidden;
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
.swiper-button-next {
  display: none !important;
}
.swiper-button-prev {
  display: none !important;
}
</style>