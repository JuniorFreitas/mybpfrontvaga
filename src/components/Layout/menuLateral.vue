<template>
  <div class="bg-total">
    <logout @deslogar="deslogar"></logout>
    <div v-show="!showMenu">
      <a href="javascript://" class="btnMobile" @click.prevent="toggleMenu">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="menuLateral" v-show="showMenu">
      <div class="bg-menu" :style="{ 'min-height': `${widthScreen}px` }">
        <div class="d-flex justify-content-end">
          <button class="btn btHamburger" @click.prevent="toggleMenu">
            <i class="fa fa-times"></i>
          </button>
        </div>
        <img src="@/assets/logosvg.svg" alt="logo white" class="logo" />
        <div
          class="d-flex align-items-center my-3 spacingPadding"
          style="margin-top: -5px !important"
        >
          <div class="flex-fill col-1">
            <img :src="fotoPerfil" alt="fotoPerfil" class="imgAluno" />
            <!--            <img src="@/assets/avatar-user.jpg" alt="user" class="imgAluno"/>-->
          </div>
          <div class="flex-fill">
            <p class="textWhite pt-3">
              {{ nome }} <br />
              <span>Administrador</span>
              <br />
            </p>
          </div>
        </div>

        <div id="menu">
          <button
            class="botao-menu-lateral"
            type="button"
            :class="{ 'bg-active': $route.meta.menuAtivo === 'Dashboard' }"
            @click.prevent="selecionaMenu('Dashboard')"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Início
          </button>

          <div class="accordion accordion-flush mt--20" id="administracao">
            <div class="accordion-item">
              <h2 class="accordion-header" id="administracaoHead">
                <button
                  class="accordion-button accordion-custom collapsed"
                  :class="{
                    'bg-active': ['Empresa', 'Cargos', 'Vagas'].includes(
                      $route.meta.menuAtivo
                    ),
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#administracaoCollapse"
                  aria-expanded="false"
                  aria-controls="administracaoCollapse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  Administração
                </button>
              </h2>
              <div
                id="administracaoCollapse"
                class="accordion-collapse collapse"
                :class="{
                  show: ['Empresa', 'Cargos', 'Vagas'].includes(
                    $route.meta.menuAtivo
                  ),
                }"
                aria-labelledby="administracaoHead"
                data-bs-parent="#administracao"
              >
                <div class="accordion-body">
                  <p v-show="false">
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Empresa')"
                      >Empresa</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{ bold: $route.meta.menuAtivo === 'Cargos' }"
                      @click.prevent="selecionaMenu('Cargos')"
                      >Cargos</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{ bold: $route.meta.menuAtivo === 'Vagas' }"
                      @click.prevent="selecionaMenu('Vagas')"
                      >Vagas</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt--20" id="curriculos">
            <div class="accordion-item">
              <h2 class="accordion-header" id="curriculosHead">
                <button
                  class="accordion-button accordion-custom collapsed"
                  :class="{
                    'bg-active': ['Recrutamento', 'Selecionados'].includes(
                      $route.meta.menuAtivo
                    ),
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#curriculosCollapse"
                  aria-expanded="false"
                  aria-controls="curriculosCollapse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  Banco de talentos
                </button>
              </h2>
              <div
                id="curriculosCollapse"
                class="accordion-collapse collapse"
                :class="{
                  show: ['Recrutamento', 'Selecionados'].includes(
                    $route.meta.menuAtivo
                  ),
                }"
                aria-labelledby="curriculosHead"
                data-bs-parent="#curriculos"
              >
                <div class="accordion-body">
                  <p>
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Recrutamento')"
                      >Recrutamento</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Selecionados')"
                      >Selecionados</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt--20" id="entrevistas">
            <div class="accordion-item">
              <h2 class="accordion-header" id="entrevistasHead">
                <button
                  class="accordion-button accordion-custom collapsed"
                  :class="{
                    'bg-active': [
                      'Parecer RH',
                      'Parecer Rota',
                      'Parecer Entrevista Técnica',
                      'Parecer Teste Prático',
                      'Entrevista Gestor',
                      'Resultado Integrado',
                    ].includes($route.meta.menuAtivo),
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#entrevistasCollapse"
                  aria-expanded="false"
                  aria-controls="entrevistasCollapse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-book-open"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Mobilização
                </button>
              </h2>
              <div
                id="entrevistasCollapse"
                class="accordion-collapse collapse"
                :class="{
                  show: [
                    'Parecer RH',
                    'Parecer Rota',
                    'Parecer Entrevista Técnica',
                    'Parecer Teste Prático',
                    'Entrevista Gestor',
                    'Resultado Integrado',
                  ].includes($route.meta.menuAtivo),
                }"
                aria-labelledby="entrevistasHead"
                data-bs-parent="#entrevistas"
              >
                <div class="accordion-body">
                  <p>
                    <a
                      href="javascript://"
                      :class="{ bold: $route.meta.menuAtivo === 'Parecer RH' }"
                      @click.prevent="selecionaMenu('Parecer RH')"
                      >Parecer RH</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{
                        bold: $route.meta.menuAtivo === 'Parecer Rota',
                      }"
                      @click.prevent="selecionaMenu('Parecer Rota')"
                      >Parecer Rota - Transporte</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{
                        bold:
                          $route.meta.menuAtivo ===
                          'Parecer Entrevista Técnica',
                      }"
                      @click.prevent="
                        selecionaMenu('Parecer Entrevista Técnica')
                      "
                      >Parecer Entrevista Técnica</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{
                        bold: $route.meta.menuAtivo === 'Parecer Teste Prático',
                      }"
                      @click.prevent="selecionaMenu('Parecer Teste Prático')"
                      >Parecer Teste Prático</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{
                        bold: $route.meta.menuAtivo === 'Entrevista Gestor',
                      }"
                      @click.prevent="selecionaMenu('Entrevista Gestor')"
                      >Entrevista Gestor</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{
                        bold: $route.meta.menuAtivo === 'Resultado Integrado',
                      }"
                      @click.prevent="selecionaMenu('Resultado Integrado')"
                      >Resultado Integrado</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt--20" id="treinamentos">
            <div class="accordion-item">
              <h2 class="accordion-header" id="treinamentosHead">
                <button
                  class="accordion-button accordion-custom collapsed"
                  :class="{
                    'bg-active': ['Carteira Etiqueta'].includes(
                      $route.meta.menuAtivo
                    ),
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#treinamentosCollapse"
                  aria-expanded="false"
                  aria-controls="treinamentosCollapse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layers"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  Treinamentos
                </button>
              </h2>
              <div
                id="treinamentosCollapse"
                class="accordion-collapse collapse"
                :class="{
                  show: ['Carteira Etiqueta'].includes($route.meta.menuAtivo),
                }"
                aria-labelledby="treinamentosHead"
                data-bs-parent="#treinamentos"
              >
                <div class="accordion-body">
                  <p>
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Carteira Etiqueta')"
                      >Carteira Etiqueta</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Certificados')"
                      >Certificação</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt--20" id="admissao">
            <div class="accordion-item">
              <h2 class="accordion-header" id="admissaoHead">
                <button
                  class="accordion-button accordion-custom collapsed"
                  :class="{
                    'bg-active': ['Processo'].includes($route.meta.menuAtivo),
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#admissaoCollapse"
                  aria-expanded="false"
                  aria-controls="admissaoCollapse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-link"
                  >
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    ></path>
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    ></path>
                  </svg>
                  Admissão
                </button>
              </h2>
              <div
                id="admissaoCollapse"
                class="accordion-collapse collapse"
                :class="{
                  show: ['Processo'].includes($route.meta.menuAtivo),
                }"
                aria-labelledby="admissaoHead"
                data-bs-parent="#admissao"
              >
                <div class="accordion-body">
                  <p v-show="false">
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Cargos')"
                      >Pré-admissão</a
                    >
                  </p>
                  <p v-show="false">
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Vagas')"
                      >Controle de exames</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript://"
                      :class="{ bold: $route.meta.menuAtivo === 'Processo' }"
                      @click.prevent="selecionaMenu('Processo')"
                      >Processo</a
                    >
                  </p>
                  <p v-show="false">
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Vagas')"
                      >Histórico</a
                    >
                  </p>
                  <p v-show="false">
                    <a
                      href="javascript://"
                      @click.prevent="selecionaMenu('Vagas')"
                      >Pós-admissão</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            class="botao-menu-lateral mt--0"
            :class="{ 'bg-active': $route.meta.menuAtivo === 'Usuários' }"
            @click.prevent="selecionaMenu('Usuários')"
            type="button"
            aria-expanded="false"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Usuários
          </button>

          <button
            class="botao-menu-lateral mt--0"
            :class="{ 'bg-active': $route.meta.menuAtivo === 'Configurações' }"
            @click.prevent="selecionaMenu('Configurações')"
            type="button"
            aria-expanded="false"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
            Configurações
          </button>

          <button
            class="botao-menu-lateral mt--0"
            type="button"
            aria-expanded="false"
            data-bs-toggle="modal"
            data-bs-target="#modalSair"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sair
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapState } from "vuex";
import Logout from "@/components/utils/Logout";

export default {
  name: "menuLateral",
  components: {
    Logout,
  },
  data() {
    return {
      ...mapState(["height"]),
      showMenu: true,
    };
  },
  mounted() {
    this.showMenu = screen.width >= 768 ? true : false;
    let currentRoute = this.$route.name;
  },

  computed: {
    ...mapGetters(["widthScreen", "autenticado", "totalComentarios"]),
    nome() {
      return this.autenticado?.nome;
    },

    fotoPerfil() {
      return this.autenticado?.foto_perfil
        ? this.autenticado?.foto_perfil
        : "https://awtecstorage.s3.amazonaws.com/assets/avatar-user.jpg";
    },
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    selecionaMenu(menu) {
      if (this.$router.currentRoute.name !== menu) {
        this.$router.push({ name: menu });
      }
      // this.$router.push({ name: menu });
    },
    deslogar() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-active {
  background-color: var(--color-primary-active-hover) !important;
}

.btnMobile {
  position: absolute;
  top: 0;
  width: 40px;
  z-index: 1;
  height: 40px;
  border-radius: 0px 0px 7px 0px;
  padding-left: 11px;
  background: var(--color-primary) !important;
  color: var(--color-white);
  border: none;

  > i {
    margin-top: 25%;
    font-size: 1rem;
  }
}

.mt--0 {
  margin-top: 0px;
}

.mt--20 {
  margin-top: -20px;
}

.bottom-border {
  border-bottom: 1px solid var(--color-primary-active-hover) !important;
}

.botao-menu-lateral {
  background-color: transparent;
  display: flex;
  height: 52px;
  border: none;
  border-bottom: 1px solid var(--color-primary-active-hover) !important;
  color: var(--color-white);
  font-size: 0.85rem;
  padding: 0.75rem 1.25rem;
  text-align: left;
  text-decoration: none;
  width: 100%;
  margin-bottom: 0px;
  transition: 0.3s linear all;

  > svg {
    margin-right: 10%;
  }

  &:hover {
    background-color: var(--color-primary-active-hover) !important;
    transition: 0.3s linear all;
  }
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-radius: 0 !important;
}
.logo {
  padding: 31px 1.25rem;
  width: 262px;
  margin-top: -51px;
}
.spacingPadding {
  padding: 0.75rem 1.25rem;
}
.accordion-custom {
  background: var(--color-primary) !important;
  color: white !important;
  border: none;
  font-size: 0.85rem;

  > svg {
    margin-right: 10%;
  }

  &.bg-active {
    background-color: var(--color-primary-active-hover) !important;
  }

  &:hover {
    background-color: var(--color-primary-active-hover) !important;
    transition: 0.3s linear all;
  }

  &:not(.collapsed)::after {
    background: none !important;
    transition: 0.3s linear all;
  }

  &::after {
    width: 0.75rem;
    height: 0.75rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f063";
  }
}

.accordion-body {
  text-align: left;
  background: var(--color-primary) !important;

  > p a {
    color: var(--color-white);
    text-decoration: none;
    margin-left: 14%;
    transition: 0.3s linear all;

    &:hover {
      font-weight: bold;
      transition: 0.3s linear all;
    }
  }
}

.menuLateral {
  width: 290px;
}

.btHamburger {
  color: var(--color-white);
  background-color: transparent;
  margin-top: 0.5rem;
  transition: 0.3s linear all;
  border: none;
  border-radius: 0;

  :hover {
    color: #8d8d8d;
    transition: 0.3s linear all;
  }
}

.btnCurso {
  background: var(--color-primary-active-hover) !important;
  color: var(--color-white);
  border: none;
  border-radius: 0 !important;
  width: 100%;
  font-size: 0.8rem;
  text-align: left;
  padding-left: 5%;
  transition: 0.3s linear all;
  margin-top: 0.3rem;

  &:hover {
    background: #0b0b0b;
    transition: 0.3s linear all;
  }

  > i {
    margin-left: 5px;
  }
}

.imgAluno {
  height: 67px;
  border-radius: 50%;
  object-fit: cover;
}

.bg-menu {
  background-color: var(--color-primary);
}
.accordion-button {
  border-bottom: 1px solid var(--color-primary-active-hover) !important;
  &:focus {
    box-shadow: none;
  }
}
.accordion-body {
  border-bottom: 1px solid var(--color-primary-active-hover) !important;
  p:first-of-type {
    margin-top: -10px;
  }
  p {
    margin-bottom: 4px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--color-primary-active-hover) !important;
  }
}
p.textWhite {
  color: var(--color-white);
  font-size: 16px;
  line-height: 24px;
  text-align: left;

  span {
    font-size: 14px;
  }
}
</style>
