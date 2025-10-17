<template>
  <div>
    <div
      class="modal fade"
      :id="id"
      data-bs-backdrop="static"
      tabindex="-1"
      aria-labelledby="modalSairLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        :class="[tamanho, central]"
        :style="styles"
      >
        <div class="modal-content">
          <div class="modal-header" v-if="topo">
            <h5 class="modal-title">{{ titulo }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              v-if="exibirFechar"
              @click="fecharModal"
            ></button>
          </div>
          <div class="modal-body">
            <slot name="conteudo"></slot>

            <div class="modal-footer" v-if="exibirFechar">
              <slot name="rodape"></slot>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                @click="fecharModal"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // declarar as propriedades
  props: {
    id: {
      type: String,
      required: true,
    },

    topo: {
      type: Boolean,
      required: false,
      default: false,
    },

    modalPai: {
      type: String,
      required: false,
    },

    titulo: {
      type: String,
      required: false,
      default: "Titulo da Janela",
    },

    fechar: {
      type: Boolean,
      required: false,
      default: false,
    },

    size: {
      type: String | Number,
      required: false,
      default: "",
    },

    centralizada: {
      type: Boolean,
      required: false,
      default: false,
    },

    labelFechar: {
      type: String,
      required: false,
      default: "Fechar",
    },
    drag: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data: function () {
    return {
      textoPreload: "",
      preload: false,
      tela: window.innerWidth,
      zIndex: 0,
    };
  },
  methods: {
    fecharModal() {
      // $("#" + this.id).modal("hide");
      // let modal = new bootstrap.Modal(document.getElementById(this.id), {
      //   keyboard: false,
      // });
      // modal.hide();
      $(`#modal-backdrop${this.zIndex}`).remove();
      this.$emit("fechou", {}); // evento disaparado quando fechar janela
    },

    abrirModal() {
      $("#" + this.id).modal("show");
      this.$emit("abriu", {}); // evento disaparado quando fechar janela
    },
  },

  mounted: function () {
    let self = this;
    let modal = $(this.$el).find("div.modal")[0]; // elemento  div.modal

    //Modal overlap
    $(modal).on("show.bs.modal", function (event) {
      var zIndex = 1040 + 10 * $(".modal:visible").length;
      self.zIndex = zIndex;
      $(this).css("z-index", zIndex);
      setTimeout(() => {
        $(".modal-backdrop")
          .not(".modal-stack")
          .css("z-index", zIndex - 1)
          .addClass("modal-stack")
          .attr("id", `modal-backdrop${zIndex}`);

        if ($(modal).next(`.modal-backdrop`).length === 0) {
          let divBackDrop = $(`#modal-backdrop${zIndex}`);
          $(divBackDrop).insertAfter(modal);
        }
      }, 50);
    });

    //Saber quantas modeias estão abertas para colocar a class 'modal-open' no <body/>
    $(modal).on("hidden.bs.modal", function (event) {
      let quantidade = $("div.modal-backdrop").length;
      if (quantidade) {
        $("body").addClass("modal-open");
      }
    });

    window.addEventListener("resize", () => {
      this.tela = window.innerWidth; // atualiza o tamanho de tela
    });
  },

  computed: {
    styles: function () {
      // caso passe numero, retorna esse objeto de styles
      if (typeof this.size == "number" && this.tela >= 710) {
        // 710 é o tamanho de tablet
        return {
          "max-width": this.size + "%",
        };
      }
    },
    exibirFechar: function () {
      return this.fechar != undefined ? this.fechar : true;
    },

    central: function () {
      return this.centralizada ? "modal-dialog-centered" : "";
    },

    tamanho: function () {
      if (this.size == undefined || typeof this.size == "number") {
        return "";
      }

      let valor = this.size;
      switch (valor.toLowerCase()) {
        case "p":
          return "modal-sm";
          break;
        case "g":
          return "modal-lg";
          break;

        default:
          return "";
          break;
      }
    },
  },
};
</script>
