<template>
  <div>
    <preload v-show="preload" msg="Enviando credenciais..."></preload>
    <form @submit.prevent="login" class="w-100" v-if="mostraForm">
      <div class="form-group pb-2">
        <input
          type="text"
          v-model="email"
          :disabled="preload"
          placeholder="E-mail"
          class="form-control form-control-sm"
        />
      </div>
      <div class="form-group pt-2">
        <input
          type="password"
          v-model="password"
          placeholder="Senha"
          :disabled="preload"
          class="form-control form-control-sm"
        />
      </div>
      <div class="text-center mb-2">
        <a
          href="#"
          @click.prevent="esqueciSenha"
          class="linkComum"
          v-show="!preload"
        >
          Esqueci minha senha
        </a>
      </div>
      <button
        class="btn btn-primary btn-sm btnRadius w-100 py-2 mb-4"
        :disabled="preload"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import Api from "@/services/Api";
import store from "@/store";

export default {
  name: "FormLogin",

  props: {
    showForm: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      preload: false,
      mostraForm: true,
      //validacao
      emailError: false,
      errors: [],
    };
  },
  mounted() {
    this.mostraForm = this.showForm;
  },
  methods: {
    async login() {
      let regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(this.email.trim())) {
        toastr.error("Verifique o e-mail digitado", "Erro");
        return false;
      }

      if (this.password.length < 6) {
        toastr.error("A senha tem que ter no minimo 6 digitos", "Erro");
        return false;
      }

      this.preload = true;

      await Api.post("/login", {
        email: this.email.trim(),
        senha: this.password,
      })
        .then(({ data }) => {
          this.preload = false;
          this.logado = true;
          this.mostraForm = false;
          store.commit("SET_USER", data.user);
          localStorage.setItem("token", data.token);
          this.$router.push({ name: "Dashboard" });
        })
        .catch((response) => {
          this.preload = false;
          this.mostraForm = true;
          this.logado = false;
          toastr.error(response);
          this.$emit("logado", this.logado);
        });
    },
    esqueciSenha() {
      this.mostraForm = false;
      this.$emit("esqueciSenha", true);
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
