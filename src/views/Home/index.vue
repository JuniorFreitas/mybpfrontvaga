<template>
  <div>
    <div class="container-fluid">
      <div class="row py-3">
        <preload v-show="preload"></preload>
        <topo-mybp :dadosempresa="empresa" v-if="!preload"></topo-mybp>
        <navbar-mybp v-if="!preload"></navbar-mybp>
        <banner-mybp v-if="!preload && $route.params.cliente_slug === 'montisol'"></banner-mybp>
      </div>
      <quemsomos :dadosempresa="empresa" :montisol="$route.params.cliente_slug === 'montisol'"
                 v-if="!preload"></quemsomos>
      <vagas-abertas :empresa="empresa" v-if="!preload"></vagas-abertas>
    </div>
    <footer-mybp v-if="!preload" class="mt-5"></footer-mybp>
  </div>
</template>
<script>
import Api from "@/services/Api";
import TopoMybp from "@/components/Layout/TopoMybp";
import FooterMybp from "@/components/Layout/FooterMybp";
import NavbarMybp from "@/components/Layout/NavbarMybp";
import BannerMybp from "@/components/Layout/BannerMybp";
import Quemsomos from "@/components/Layout/Quemsomos";
import VagasAbertas from "@/components/Layout/VagasAbertas";

export default {
  components: {
    Quemsomos,
    FooterMybp,
    TopoMybp,
    NavbarMybp,
    BannerMybp,
    VagasAbertas
  },
  data() {
    return {
      empresa: null,
      preload: true,
      estadoSelecionado: "",
      municipioSelecionado: "",
      keyword: "",
    };
  },
  mounted() {
    this.preload = true;
    Api.get(`/${this.$route.params.cliente_slug}`)
        .then(({data}) => {
          data.dados.vagas_abertas.sort((a, b) => a.titulo.localeCompare(b.titulo));
          this.empresa = data.dados;
          this.preload = false;
        })
        .catch((error) => {
          window.location.href = `/${this.$route.params.cliente_slug}/naoencontrado`;
        });
  },
};
</script>
<style lang="scss">
.logo {
  height: 130px;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}


</style>
