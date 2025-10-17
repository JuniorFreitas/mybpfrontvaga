module.exports = {
  validaVazio: (obj, carac_minimo) => {
    var valor = $(obj).val();
    var quant = carac_minimo;
    $(obj).siblings("div.invalid-feedback").remove();

    if ((valor.length == 0 || !valor) && quant > 0) {
      $(obj).addClass("is-invalid");
      if (
        $(obj).siblings("div.invalid-feedback").length == 0 &&
        !$(obj).attr("data-toggle")
      ) {
        if ($(obj).siblings("div.input-group-append").length) {
          $(obj)
            .siblings("div.input-group-append")
            .after(`<div class="invalid-feedback">Campo obrigatório</div>`);
        } else {
          $(obj).after(`<div class="invalid-feedback">Campo obrigatório</div>`);
        }
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).attr("data-content", "Campo obrigatório");
        $(obj).popover();
        $(obj).popover("enable");
      }
      return false;
    } else {
      if ((valor.length > 0 || !valor) && valor.length < quant) {
        $(obj).addClass("is-invalid");
        if (
          $(obj).siblings("div.invalid-feedback").length == 0 &&
          !$(obj).attr("data-toggle")
        ) {
          if ($(obj).siblings("div.input-group-append").length) {
            $(obj)
              .siblings("div.input-group-append")
              .after(`<div class="invalid-feedback">Campo obrigatório</div>`);
          } else {
            $(obj).after(
              `<div class="invalid-feedback">Campo obrigatório</div>`
            );
          }
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).attr("data-content", "Campo obrigatório");
          $(obj).popover();
          $(obj).popover("enable");
        }
        return false;
      } else {
        $(obj).removeClass("is-invalid");
        if (
          $(obj).next("div.invalid-feedback").length > 0 &&
          !$(obj).attr("data-toggle")
        ) {
          //$(obj).next('div.invalid-feedback').remove();
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).popover("disable");
        }
        return true;
      }
    }
  },
  valida_cpf(obj) {
    var valor = $(obj).val();

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    var cpf;

    $(obj).next("div.invalid-feedback").remove();

    cpf = valor;
    cpf = replaceAll(cpf, ".", ""); // tira os pontos
    cpf = replaceAll(cpf, "-", ""); // tira o traço
    digitos_iguais = 1;
    if (cpf.length == 0) {
      $(obj).removeClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length > 0 &&
        !$(obj).attr("data-toggle")
      ) {
        //$(obj).next('div.invalid-feedback').remove();
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).popover("disable");
      }
      return true;
    }
    if (cpf.length < 11) {
      $(obj).addClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length == 0 &&
        !$(obj).attr("data-toggle")
      ) {
        $(obj).after(
          `<div class="invalid-feedback">O CPF está incompleto.</div>`
        );
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).attr("data-content", "O CPF está incompleto.");
        $(obj).popover();
        $(obj).popover("enable");
      }
      return false;
    }
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      }
      if (resultado != digitos.charAt(0)) {
        $(obj).addClass("is-invalid");
        if (
          $(obj).next("div.invalid-feedback").length == 0 &&
          !$(obj).attr("data-toggle")
        ) {
          $(obj).after(
            `<div class="invalid-feedback">O CPF está inválido!</div>`
          );
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).attr("data-content", "O CPF está inválido!");
          $(obj).popover();
          $(obj).popover("enable");
        }
        return false;
      }
      numeros = cpf.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      }
      if (resultado != digitos.charAt(1)) {
        $(obj).addClass("is-invalid");
        if (
          $(obj).next("div.invalid-feedback").length == 0 &&
          !$(obj).attr("data-toggle")
        ) {
          $(obj).after(
            `<div class="invalid-feedback">O CPF está inválido!</div>`
          );
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).attr("data-content", "O CPF está inválido!");
          $(obj).popover();
          $(obj).popover("enable");
        }
        return false;
      }
      $(obj).removeClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length > 0 &&
        !$(obj).attr("data-toggle")
      ) {
        //$(obj).next('div.invalid-feedback').remove();
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).popover("disable");
      }
      return true;
    } else $(obj).addClass("is-invalid");
    if (
      $(obj).next("div.invalid-feedback").length == 0 &&
      !$(obj).attr("data-toggle")
    ) {
      $(obj).after(`<div class="invalid-feedback">O CPF está inválido!</div>`);
    }
    if ($(obj).attr("data-toggle")) {
      $(obj).attr("data-content", "O CPF está inválido!");
      $(obj).popover();
      $(obj).popover("enable");
    }
    return false;
  },

  valida_cpf_vazio(obj) {
    var valor = $(obj).val();
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    var cpf;
    $(obj).next("div.invalid-feedback").remove();

    cpf = valor;
    cpf = replaceAll(cpf, ".", ""); // tira os pontos
    cpf = replaceAll(cpf, "-", ""); // tira o traço
    digitos_iguais = 1;
    if (cpf.length == 0) {
      $(obj).addClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length == 0 &&
        !$(obj).attr("data-toggle")
      ) {
        $(obj).after(
          `<div class="invalid-feedback">O CPF é obrigatório.</div>`
        );
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).attr("data-content", "O CPF é obrigatório.");
        $(obj).popover();
        $(obj).popover("enable");
      }
      return false;
    }
    if (cpf.length < 11) {
      $(obj).addClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length == 0 &&
        !$(obj).attr("data-toggle")
      ) {
        $(obj).after(
          `<div class="invalid-feedback">O CPF está incompleto.</div>`
        );
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).attr("data-content", "O CPF está incompleto.");
        $(obj).popover();
        $(obj).popover("enable");
      }
      return false;
    }
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      }
      if (resultado != digitos.charAt(0)) {
        $(obj).addClass("is-invalid");
        if (
          $(obj).next("div.invalid-feedback").length == 0 &&
          !$(obj).attr("data-toggle")
        ) {
          $(obj).after(
            `<div class="invalid-feedback">O CPF está inválido!</div>`
          );
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).attr("data-content", "O CPF está inválido!");
          $(obj).popover();
          $(obj).popover("enable");
        }
        return false;
      }
      numeros = cpf.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      }
      if (resultado != digitos.charAt(1)) {
        $(obj).addClass("is-invalid");
        if (
          $(obj).next("div.invalid-feedback").length == 0 &&
          !$(obj).attr("data-toggle")
        ) {
          $(obj).after(
            `<div class="invalid-feedback">O CPF está inválido!</div>`
          );
        }
        if ($(obj).attr("data-toggle")) {
          $(obj).attr("data-content", "O CPF está inválido!");
          $(obj).popover();
          $(obj).popover("enable");
        }
        return false;
      }
      $(obj).removeClass("is-invalid");
      if (
        $(obj).next("div.invalid-feedback").length > 0 &&
        !$(obj).attr("data-toggle")
      ) {
        //$(obj).next('div.invalid-feedback').remove();
      }
      if ($(obj).attr("data-toggle")) {
        $(obj).popover("disable");
      }
      return true;
    } else $(obj).addClass("is-invalid");
    if (
      $(obj).next("div.invalid-feedback").length == 0 &&
      !$(obj).attr("data-toggle")
    ) {
      $(obj).after(`<div class="invalid-feedback">O CPF está inválido!</div>`);
    }
    if ($(obj).attr("data-toggle")) {
      $(obj).attr("data-content", "O CPF está inválido!");
      $(obj).popover();
      $(obj).popover("enable");
    }
    return false;
  },
  teste: (obj) => {
    console.log(obj);
  },
};
