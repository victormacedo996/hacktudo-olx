<template>
  <div style="width: 255px; height: 255px">
    <div v-for="(item, index) in responses" :key="index">
      <swiper
        :style="{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        class="mySwiper2">
        <swiper-slide><img src="{{item.image_url}}" /></swiper-slide>
        
      </swiper>

      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="5"
        :slidesPerView="2"
        :freeMode="true"
        :watchSlidesProgress="true"
        class="mySwiper">
          <swiper-slide><img src="{{item.image_url}}" /></swiper-slide>
      </swiper>
    </div>
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
  opacity: 0.4;
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
</style>