<!--<bt-ativo :rota="`tipo-imoveis/${tipo.id}/ativa-desativa`" :model="tipo"></bt-ativo>-->
<template>
  <div>
    <button
      class="btn btn-sm btn-success"
      @click.prevent="ativaDesativa()"
      v-if="model.ativo"
      :disabled="model.preload"
    >
      <span
        class="fas fa-check"
        aria-hidden="true"
        v-if="!model.preload"
      ></span>
      <span
        class="fas fa-redo fa-spin"
        aria-hidden="true"
        v-if="model.preload"
      ></span>
      {{ ativoLabel }}
    </button>
    <button
      class="btn btn-sm btnFormAlterar btn-danger"
      @click.prevent="ativaDesativa()"
      v-if="!model.ativo"
      :disabled="model.preload"
    >
      <span
        class="fas fa-times"
        aria-hidden="true"
        v-if="!model.preload"
      ></span>
      <span
        class="fas fa-redo fa-spin"
        aria-hidden="true"
        v-if="model.preload"
      ></span>
      {{ inativoLabel }}
    </button>
  </div>
</template>

<script>
import Api from "@/services/Api";
import { urlApi, dev } from "@/config/config.json";
export default {
  props: {
    rota: {
      type: String,
      required: true,
      default: () => "",
    },
    ativoLabel: {
      type: String,
      required: false,
      default: () => "Ativo",
    },
    inativoLabel: {
      type: String,
      required: false,
      default: () => "Inativo",
    },
    model: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  methods: {
    ativaDesativa: function () {
      this.$set(this.model, "preload", true);
      this.model.ativo = !this.model.ativo;
      // var dados = {};
      // dados._method = 'PUT';

      Api.put(`${this.rota}`, { id: this.model.id })
        .then((response) => {
          this.$set(this.model, "preload", false);
          this.model.ativo = response.data.ativo;
        })
        .catch((error) => {
          this.$set(this.model, "preload", false);
        });
    },
  },
};
</script>

<style scoped></style>
