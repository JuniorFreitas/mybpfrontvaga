<template>
  <div>
    <div class="container-fluid">
      <div class="row py-3">
        <preload v-show="preload"></preload>
        <topo-mybp :dadosempresa="empresa" v-if="!preload"></topo-mybp>
        <navbar-mybp v-if="!preload"></navbar-mybp>
        <banner-mybp v-if="!preload && $route.params.cliente_slug === 'montisol'"></banner-mybp>
      </div>
      <quemsomos :dadosempresa="empresa" :montisol="$route.params.cliente_slug === 'montisol'" v-if="!preload"></quemsomos>
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

export default {
  components: {
    FooterMybp,
    TopoMybp,
    NavbarMybp,
    BannerMybp,
    Quemsomos,
  },
  data() {
    return {
      empresa: null,
      preload: true,
      keyword: "",
    };
  },
  filters: {
    uppercase(valor) {
      return valor.toUpperCase();
    },
  },
  mounted() {
    this.preload = true;
    Api.get(`/${this.$route.params.cliente_slug}`)
        .then(({data}) => {
          this.empresa = data.dados;
          this.preload = false;
        })
        .catch((error) => {
          window.location.href = `/${this.$route.params.cliente_slug}/naoencontrado`;
        });
  },
  methods: {
    selecionaVaga(vaga_aberta) {
      let slugVaga = vaga_aberta.titulo.trim().toLowerCase().replace(/ /g, "-");
      this.$router.push({
        name: "VagaUnica",
        params: {
          cliente_slug: this.$route.params.cliente_slug,
          vaga_aberta_id: vaga_aberta.id,
          vaga_slug: slugVaga,
        },
      });
    },
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
