<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-12">
        <h4 class="text-center">Vagas Abertas</h4>
        <h5 class="text-center">Cadastre seu currículo em nosso banco de talentos!</h5>
      </div>
      <fieldset
          class="mb-3"
          v-show="empresa.vagas_abertas.length"
      >
        <legend><i class="fa fa-search"></i> Filtrar</legend>
        <div class="row">
          <div class="col-md-3">
            <label for="">Por Estado</label>
            <select
                class="form-select form-select-sm mt-2"
                v-model="estadoSelecionado"
                @change.prevent="municipioSelecionado = ''"
            >
              <option value="">Sem filtro</option>
              <option
                  v-for="(vagas, uf) in vagasGroupEstadoMunicipioSorted"
                  :key="vagas"
                  :value="vagas"
              >
                {{ vagas }}
              </option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="">Por Municipio</label>
            <select
                class="form-select form-select-sm mt-2"
                v-model="municipioSelecionado"
            >
              <option value="">Sem filtro</option>
              <option
                  v-for="(item, ind) in vagaMunicipio"
                  :key="ind"
                  :value="ind"
              >
                {{ ind }}
              </option>
            </select>
          </div>

          <div class="col">
            <label for="">Por Vaga</label>
            <input
                type="text"
                class="form-control form-control-sm mt-2"
                v-model="keyword"
                placeholder="Pesquise pela vaga"
            />
          </div>
        </div>
      </fieldset>
    </div>

    <div class="accordion" id="accordionExample">
      <div
          class="accordion-item"
          v-for="vaga_aberta in filterMunicipioEstado"
          :key="vaga_aberta.id"
      >
        <h2 class="accordion-header" :id="`headingTwo${vaga_aberta.id}`">
          <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapseTwo${vaga_aberta.id}`"
              aria-expanded="false"
              :aria-controls="`collapseTwo${vaga_aberta.id}`"
          >
            {{ vaga_aberta.titulo | uppercase }} /
            {{ vaga_aberta.municipio.nome }} - {{ vaga_aberta.municipio.uf }}
          </button>
        </h2>
        <div
            :id="`collapseTwo${vaga_aberta.id}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`headingTwo${vaga_aberta.id}`"
            data-bs-parent="#accordionExample"
        >
          <div class="accordion-body" v-html="vaga_aberta.descricao"></div>
          <div class="accordion-body">
            <button
                class="btn btn-sm btn-primary"
                @click.prevent="selecionaVaga(vaga_aberta)"
            >
              Candidatar-se
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "VagasAbertas",
  components: {},
  props: {
    empresa: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      estadoSelecionado: "",
      municipioSelecionado: "",
      keyword: "",
    };
  },
  filters: {
    uppercase(valor) {
      return valor.toUpperCase();
    },
  },
  mounted() {

  },

  computed: {
    vagasFiltradas() {
      return this.empresa.vagas_abertas.filter((vaga) => {
        return vaga.titulo.toLowerCase().includes(this.keyword.toLowerCase());
      });
    },

    vagasGroupEstadoMunicipio() {
      return this.vagasFiltradas.reduce((acc, vaga) => {
        if (!acc[vaga.municipio.uf]) {
          acc[vaga.municipio.uf] = {};
        }
        if (!acc[vaga.municipio.uf][vaga.municipio.nome]) {
          acc[vaga.municipio.uf][vaga.municipio.nome] = [];
        }
        acc[vaga.municipio.uf][vaga.municipio.nome].push(vaga);
        return acc;
      }, {});
    },

    vagasGroupEstadoMunicipioSorted() {
      return Object.keys(this.vagasGroupEstadoMunicipio).sort();
    },

    vagaMunicipio() {
      return this.vagasGroupEstadoMunicipio[this.estadoSelecionado];
    },

    filterMunicipioEstado() {
      return this.vagasFiltradas.filter((vaga) => {
        return (
            (!this.estadoSelecionado || vaga.municipio.uf === this.estadoSelecionado) &&
            (!this.municipioSelecionado || vaga.municipio.nome === this.municipioSelecionado) &&
            vaga.titulo.toLowerCase().includes(this.keyword.toLowerCase())
        );
      });
    },
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
<style lang="scss" scoped>

</style>
