<template>
  <div>
    <form @submit.prevent="resetSenha" class="w-100" v-if="showForm">
      <p class="boasVindas">
        <strong>Esqueci minha senha</strong><br />
        <span>Insira seu e-mail</span>
      </p>
      <div class="form-group py-2">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="E-mail"
          class="form-control form-control-sm"
        />
      </div>
      <button class="btn btn-primary btn-sm btnRadius w-100 py-2">
        Enviar
      </button>
      <a href="#" @click.prevent="voltar" class="linkComum">Voltar</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormEsqueciSenha",
  props: {
    showForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    voltar() {
      this.$emit("esqueciSenha", false);
    },
    resetSenha() {
      this.$emit("resetSenha", true);
    },
  },
};
</script>

<style lang="scss">
form {
  margin-top: 40px;
}
button {
  margin-top: 20px;
}
</style>
