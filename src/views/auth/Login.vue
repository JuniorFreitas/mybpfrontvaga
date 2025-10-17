<template>
  <div class="bg">
    <div class="container d-flex h-100">
      <div class="align-self-center">
        <div class="login">
          <img src="@/assets/logo.svg" alt="logo" class="py-3 logo" />
          <p class="text-center"><strong>ÁREA ADMINISTRATIVA</strong></p>
          <form-login
            v-if="!logado && !esqueciSenha"
            :showForm="!logado && !esqueciSenha"
            @esqueciSenha="evtEsqueciSenha"
            @logado="evtLogado"
          ></form-login>

          <form-esqueci-senha
            v-if="esqueciSenha"
            :showForm="esqueciSenha"
            @esqueciSenha="evtEsqueciSenha"
            @showformsenha="evtEsqueciSenha"
          ></form-esqueci-senha>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "@/components/Login/formLogin.vue";
import formEsqueciSenha from "@/components/Login/formEsqueciSenha.vue";
export default {
  components: {
    FormLogin,
    formEsqueciSenha,
  },
  data() {
    return {
      email: "",
      password: "",
      logado: false,
      esqueciSenha: false,
    };
  },
  computed: {
    storage() {
      return localStorage.getItem("token");
    },
  },
  created() {
    this.logado = this.storage ? true : false;
    if (this.logado) {
      this.$router.push({ name: "Dashboard" });
    }
  },
  methods: {
    evtLogado(logado) {
      this.logado = logado;
    },
    evtEsqueciSenha(esqueciSenha) {
      this.logado = false;
      this.esqueciSenha = esqueciSenha;
    },
  },
};
</script>

<style lang="scss">
.logo {
  height: 120px;
}
.cxLogin {
  height: 478px;
}
.boasVindas {
  margin-top: 12px;
  font-size: 17px;
  text-align: center;
  color: #23232e;
  font-weight: 400;
  line-height: 18px;
  span {
    font-size: 14px;
  }
}
.bg {
  background: url("../../assets/bg_login.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.login {
  background: white;
  padding: 30px;
  border-radius: 5px;
  width: 302px;
  /* min-height: 478px; */
  min-height: 30%;
}
form {
  margin-top: 0px;
}
button {
  margin-top: 20px;
}
</style>
