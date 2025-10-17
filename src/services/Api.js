import axios from "axios";
import { urlApi, dev } from "@/config/config.json";

function mostraErro(
  retornoLaravel,
  titulo = "Ocorreu um erro",
  quantidade = 3
) {
  if (retornoLaravel === undefined) {
    return false;
  }
  let mensagem = "";
  titulo = retornoLaravel.msg ? retornoLaravel.msg : titulo;
  let lista = _.keys(retornoLaravel.errors);
  if (lista.length) {
    mensagem += `<ul>`;
    let total = 1;
    lista.every((key, item) => {
      let descricao = retornoLaravel.errors[key][0];
      mensagem += `<li> <strong>${key}:</strong> ${descricao} </li>`;
      total++;
      if (total == quantidade) {
        return false;
      }
    });
    mensagem += `</ul>`;
  } else {
    mensagem = retornoLaravel.message;
  }

  toastr.error(mensagem, titulo);
}
function errorHandle(error) {
  // check for errorHandle config
  if (
    // eslint-disable-next-line no-prototype-builtins
    error.config.hasOwnProperty("errorHandle") &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }
  if (!error.response) {
    toastr.error("Houve um erro ao se comunicar com o servidor");
    return Promise.reject(error);
  }
  // // if has response show the error
  if (error.response) {
    if (dev) {
      // console.log(error.response);
    }
    if (error.response.status === 401) {
      // console.log("", "403 - Sem Permissão");
      localStorage.clear();
      return Promise.reject(error);
    }
    if (error.response.status === 419) {
      // console.log('', '419 - Recarregue a página novamente');
      return Promise.reject(error);
    }
    if (error.response.status === 403) {
      // console.log("", "403 - Sem Permissão");
      return Promise.reject(error);
    }
  }
  console.log(error.response.data);
  mostraErro(error.response.data);
  return Promise.reject(error);
}

const Api = axios.create({
  baseURL: `${urlApi}`,
});

// apply interceptor on response error
Api.interceptors.response.use((response) => response, errorHandle);
// Api.defaults.withCredentials = true;
Api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default Api;
