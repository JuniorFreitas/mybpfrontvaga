import Vue from "vue";
import jQuery from "jquery";
// import bs from "bootstrap";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Api from "@/services/Api";

// Verifica se a URL contém `/#/` e redireciona para a versão limpa
if (window.location.hash.startsWith("#/")) {
  const cleanPath = window.location.href.replace("#/", "");
  window.location.replace(cleanPath);
}



// require("@/assets/jquery.maskMoney.js");
// import Api from "@/services/Api";
window.$ = jQuery;
window.toastr = require("toastr");
window._ = require("lodash");
toastr.options.closeButton = true;
window.bootstrap = require("bootstrap");


window.moment = require("moment");
moment.locale("pt-BR");
require("daterangepicker");
require("@/helpers/jquery.mask.min.js");
// require("@/assets/jquery.maskMoney.js");
require("@/helpers/utils.js");

Vue.component("modal", require("@/components/utils/Modal").default);
Vue.component("preload", require("@/components/utils/Preload").default);
Vue.component("cookies", require("@/components/utils/Cookies").default);
Vue.component("bt-ativo", require("@/components/utils/AtivoInativo").default);
Vue.component("topo", require("@/components/utils/Topo").default);
Vue.component(
  "controle-paginacao",
  require("@/components/utils/ControlePaginacao").default
);
Vue.component("datepicker", require("@/components/utils/DatePicker").default);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  directives: {
    mascara: require("@/directives/mascaras").default,
  },
  methods: {},
  render: (h) => h(App),
}).$mount("#app");
