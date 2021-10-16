function customGetCookie(name) {
  var v = document.cookie.match(
    "(^|;) ?" + name + "=([^;]*)(;|$)"
  );
  return v ? v[2] : null;
}
function customSetCookie(name, value, domain, days) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie =
    name + "=" + value + ";domain=" + domain + ";path=/;expires=" + d.toGMTString();
}

function acceptCookies(domain) {
  customSetCookie("olx-cookies-accept", "1", domain);
  document.getElementById(
    "cookie-notice-container"
  ).style.display = "none";
};

function getCookieNoticeStyle() {
  return `
    .cookie-notice-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      -webkit-font-smoothing: antialiased;
      justify-content: center;
      left: 0;
    }

    @keyframes cookie-notice-fade-up {
      0% {
          opacity: 0;
          transform: translate(0, 100%);
      }
      100% {
          opacity: 1;
          transform: none;
      }
    }

    .cookie-notice-box {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      z-index: 10000000;

      position: fixed;
      align-items: center;

      opacity: 1;
      border-radius: 8px;

      font-size: 14px;
      font-family: 'Nunito Sans', 'lato', 'sans-serif', 'Arial', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica';
      font-weight: 400;

      animation-name: cookie-notice-fade-up;
      animation-duration: 0.5s;
    }

    .cookie-notice-box-desktop {
      flex-direction: row;

      bottom: 24px;
      height: 64px;
      width: 85vw;

      padding: 0 24px 0 24px;
    }

    .cookie-notice-box-olx {
      background-color: #4A4A4A;
    }

    .cookie-notice-box-autoshift {
      background-color: #2B2B2B;
    }

    .cookie-notice-box-mobile {
      flex-direction: column;

      bottom: 16px;

      margin: 0 16px 0 16px;
      padding: 16px 24px 16px 24px;

      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      left: 0;
      right: 0;
    }

    .cookie-notice-disclaimer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      vertical-align: middle;
      color: #ffffff;
    }

    .cookie-notice-disclaimer-desktop {
      height: 32px;
      margin-right: 16px;
      padding: 16px 0 16px 0;
    }


    .cookie-notice-parag {
      margin: 0;

      font-family: 'Nunito Sans', 'lato', 'sans-serif', 'Arial', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    .cookie-notice-link {
      color: #ffffff;
    }

    .cookie-notice-link:hover {
      color: #ffffff;
    }

    .cookie-notice-ok-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: 32px;

      color: #ffffff;

      border-radius: 100px;
      font-family: 'Nunito Sans', 'lato', 'sans-serif', 'Arial', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      border: 1px solid transparent;

      flex: none;
      order: 0;
      align-self: center;
      flex-grow: 0;

      cursor: pointer;
    }

    .cookie-notice-ok-button-olx {
      background-color: #F28000;
    }

    .cookie-notice-ok-button-olx:hover {
      background-color: #F99D21;
    }

    .cookie-notice-ok-button-autoshift {
      background-color: #60A4F2;
    }

    .cookie-notice-ok-button-autoshift:hover {
      background-color: #8FBDF6;
    }

    .cookie-notice-ok-button-desktop {
      width: 81px;
      margin: 10px 0px;
    }

    .cookie-notice-ok-button-mobile {
      flex: 1;

      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      margin: 16px 0 0 0;
    }`;
}

(function () {

  if (navigator.userAgent.match(/OLX-Source/)) {
    return;
  }

  var head = document.getElementsByTagName('HEAD')[0];

  // Create new style element
  var style = document.createElement('style');
  style.type = 'text/css';

  // Append link element to HTML head
  head.appendChild(style);
  style.appendChild(document.createTextNode(getCookieNoticeStyle()));

  function createCustomHTMLFragment(htmlStr) {
    var frag = document.createDocumentFragment(),
      temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }

  var fragment = createCustomHTMLFragment(
    '<div id="cookie-notice-container" class="cookie-notice-container" style="display: none"><div id="cookie-notice-box" class="cookie-notice-box"><div id="cookie-notice-disclaimer" class="cookie-notice-disclaimer"><p class="cookie-notice-parag">Usamos <b>cookies</b> para personalizar conte&uacute;dos e melhorar a sua experi&ecirc;ncia. Ao navegar neste site, voc&ecirc; concorda com a nossa <a href="https://ajuda.olx.com.br/s/article/politica-de-cookies-olx" target="_blank" class="cookie-notice-link"><u>Pol&iacute;tica de Cookies</u></a>.</p></div><button id="cookie-notice-ok-button" class="cookie-notice-ok-button" type="submit">Entendi</button></div></div>'
  );

  var bodyTag = document.getElementsByTagName("body")[0];

  bodyTag.parentNode.insertBefore(fragment, bodyTag);
  var acceptedCookies =
    customGetCookie("olx-cookies-accept") || false;

  var isAutoshift = window.location.href.match(/autoshift/gi) ? true : false
  var isDesktop = window.innerWidth < 800 ? false : true;

  var clientTypeSufix = isDesktop ? "-desktop" : "-mobile";
  var companyTypeSufix = isAutoshift ? "-autoshift" : "-olx";

  document
    .getElementById("cookie-notice-ok-button")
    .onclick = function() { acceptCookies(isAutoshift ? '.autoshift.com.br' : '.olx.com.br') }

  document
    .getElementById("cookie-notice-box")
    .classList.add("cookie-notice-box" + clientTypeSufix);
  document
    .getElementById("cookie-notice-box")
    .classList.add("cookie-notice-box" + companyTypeSufix);

  if (isDesktop) {
    document
      .getElementById("cookie-notice-disclaimer")
      .classList.add("cookie-notice-disclaimer" + clientTypeSufix);
  }

  document
    .getElementById("cookie-notice-ok-button")
    .classList.add("cookie-notice-ok-button" + clientTypeSufix);
  document
    .getElementById("cookie-notice-ok-button")
    .classList.add("cookie-notice-ok-button" + companyTypeSufix);

  if (!acceptedCookies) {
    document.getElementById(
      "cookie-notice-container"
    ).style.display = "";
  }

})();