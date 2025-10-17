<template>
  <div>
    <modal id="modalSair" size="p">
      <template slot="conteudo" class="text">
        <div class="text-center">
          <i class="fa fa-exclamation-triangle fa-5x text-warning"></i>
        </div>
        <p class="boasVindas">
          <span>Você tem certeza que deseja sair?</span>
        </p>

        <button
          class="btn btn-danger btn-sm btnRadius w-100 py-2"
          @click="deslogar"
          data-bs-dismiss="modal"
        >
          Sim
        </button>

        <button
          class="btn btn-primary btn-sm btnRadius w-100 py-2"
          data-bs-dismiss="modal"
        >
          Não
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/utils/Modal.vue";
export default {
  name: "Logout",
  components: {
    Modal,
  },
  computed: {
    storage() {
      return JSON.parse(localStorage.getItem("user"));
    },
    nome() {
      return this.storage.nome;
    },
  },
  methods: {
    deslogar() {
      localStorage.clear();
      this.$emit("deslogar", false);
      if (this.$route.name !== "Login") {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
