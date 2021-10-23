<template>
  <div>
    <div id="content" class="sc-18p038x-4 iforLC">
      <div class="sc-18p038x-3 dSrKbb">
        <div class="sc-bdVaJa h3us20-1 h3us20-0 gvtffP">
          <div class="h3us20-2 jGvFuF">
            <div class="sc-bwzfXH h3us20-0 cBfPri">
              <div class="duvuxf-0 h3us20-0 dlWajz">
                <div class="sc-hmzhuo sc-1aze3je-0 igTHNl sc-jTzLTM iwtnNi">
                  <a
                    href="https://rj.olx.com.br/"
                    color="dark"
                    class="sc-1aze3je-1 jzAlh sc-jAaTju jYMkDw"
                    type="secondary"
                    font-weight="500"
                  >
                    Rio de Janeiro </a
                  ><svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#4A4A4A"
                    class="sc-1aze3je-2 gQqMLR"
                    size="24"
                  >
                    <path
                      fill="#4A4A4A"
                      fill-rule="evenodd"
                      d="M9.47 17.47a.75.75 0 001.06 1.06l6-6a.75.75 0 000-1.06l-6-6a.75.75 0 00-1.06 1.06L14.94 12l-5.47 5.47z"
                    ></path></svg
                  ><a
                    href="https://rj.olx.com.br/rio-de-janeiro-e-regiao"
                    color="dark"
                    class="sc-1aze3je-1 jzAlh sc-jAaTju jYMkDw"
                    type="secondary"
                    font-weight="500"
                  >
                    Rio de Janeiro e região
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sc-bwzfXH h3us20-0 cBfPri">
            <Product />
            <SideBar />
            <AnuncioLateral />
          </div>
        </div>
      </div>
      <div id="rightside" class="sc-18p038x-5 kaZaqn">
        <div class="qp0wh1-1 RGSNa">
          <div class="sticky-outer-wrapper released" style="height: 600px">
            <div
              class="sticky-inner-wrapper"
              style="
                position: relative;
                transform: translate3d(0px, 0px, 0px);
                width: 300px;
              "
            >
              <div
                id="adview-page-right-pub"
                data-google-query-id="CImfycSU2PMCFeOIlQIdpIIFDg"
              >
                <div id="" style="border: 0pt none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "./product.vue";
import sidebar from "./sidebar.vue";
import anunciolateral from "./anunciolateral.vue";

export default {
  name: "body",
  components: {
    Product: product,
    SideBar: sidebar,
    AnuncioLateral: anunciolateral,
  },
};
</script>

<style>
</style>