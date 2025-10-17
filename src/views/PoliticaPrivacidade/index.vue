<template>
  <div>
    <div class="container-fluid">
      <div class="row py-3">
        <preload v-show="preload"></preload>
        <topo-mybp :dadosempresa="empresa" v-if="!preload"></topo-mybp>
        <navbar-mybp v-if="!preload"></navbar-mybp>
      </div>
    </div>

    <div v-if="!preload" class="container">
      <div class="row">
        <div class="col-12 mb-3">
          <h3>Política de Cookies e Termos de uso</h3>
          <p style="font-size: 1rem; line-height: 2.5rem; word-spacing: 0.3rem; text-align: justify">
            Os cookies usados no site são categorizados e você pode ler sobre cada categoria e permitir ou negar
            parte ou a totalidade. Quando as categorias permitidas anteriormente são desativadas, todos os
            cookies atribuídos a essa categoria serão excluídos do seu navegador. <br>
            Informamos que usamos os cookies necessários para fazer o site funcionar da melhor forma possível e
            sempre aprimorar os nossos serviços. Alguns cookies são classificados como necessários e permitem a
            funcionalidade central, como segurança, gerenciamento de rede e acessibilidade . Estes cookies podem
            ser coletados e armazenados assim que você inicia sua navegação ou quando usa algum recurso que os
            requer. <br>
            É importante que você saiba que, quando aceita nossa política de cookies, poderemos compartilhar
            informações sobre seu uso do nosso site com nossos parceiros de mídia social, publicidade e análise,
            que podem combiná-los com outras informações que você forneceu a eles ou que eles coletaram do uso
            de seus serviços.
            <br>
            Então poderemos usar os seguintes cookies, de acordo com a necessidade do nosso site:
            <br>
            <br>1. COOKIES NECESSÁRIOS
            <br>
            Alguns cookies são necessários para fornecer a funcionalidade principal. O site não funcionará
            corretamente sem esses cookies e eles estão ativados por padrão e não podem ser desativados.
            <br> 2. PREFERÊNCIAS/ FUNCIONALIDADE<br>
            Os cookies de preferência permitem que o site se lembre de informações para personalizar a aparência
            ou o comportamento do site para cada usuário. Isso pode incluir o armazenamento de moedas, regiões,
            idiomas ou temas de cor selecionados. Para poupar seu esforço, nosso cookie de funcionalidade já
            deixa salvo aquilo que você prefere para você não ter que informar sempre suas preferências ao
            acessar nossa página.<br>
            3. COOKIES ANALÍTICOS<br>
            Os cookies analíticos nos ajudam a melhorar nosso site, coletando e relatando informações sobre seu
            uso.<br>
            4. COOKIES DE MARKETING<br>
            Estes cookies permitem que você compartilhe nosso conteúdo nas suas redes sociais. Também podem ser
            usados para rastrear visitantes em sites para permitir que os editores exibam anúncios com base em
            seu perfil de usuário e preferências. Além disso, também guardam dados sobre quantos visitantes
            viram ou clicaram nos nossos anúncios, a fim de otimizar as campanhas publicitárias.<br>
            5. COOKIES DE DESEMPENHO<br>
            São cookies que otimizam a experiência de uso ao coletar informações sobre as páginas acessadas, se
            apresentam erro etc.<br>
            6. COOKIES PRIMÁRIOS<br>
            Alguns cookies serão colocados em seu dispositivo diretamente pelo nosso site - são conhecidos como
            cookies primários. Eles são essenciais para você navegar no site e usar seus recursos.<br>
            7. COOKIES PROPRIETÁRIOS<br>
            São cookies definidos pelo site que você está acessando ou por terceiros em nome do site em questão.<br>
            8. COOKIES DE TERCEIROS<br>
            São cookies definidos por terceiros, que não fazem parte do site que você está acessando.<br>
            9. COOKIES DE SESSÃO OU TEMPORÁRIOS<br>
            São cookies que expiram assim que você encerra a sessão, fechando seu navegador.<br>
            10. COOKIES PERSISTENTES OU PERMANENTES<br>
            São cookies que permanecem no seu dispositivo durante um período determinado ou até que você os
            exclua.
            <br>
            Entendendo melhor:<br>
            O que são Cookies de um site?<br>
            Cookies são pequenos arquivos de texto enviados pelo site em questão e armazenados no seu navegador.
            Eles capturam informações sobre o seu comportamento de uso durante a navegação pelas páginas,
            podendo personalizar conteúdo e anúncios, fornecer recurso de mídia social e analisar o tráfego.
            Assim, dados fornecidos como seu nome, endereço de e-mail e preferências são armazenados e lembrados
            posteriormente por um cookie.
            <br>
            Controle e Restrição de cookies<br>
            As autorizações para coleta de cookies são obtidas quando de seu primeiro acesso a nosso website. As
            autorizações podem ser alteradas de acordo com as preferências de seu navegador ou simplesmente
            recusadas. Ressalvamos, contudo, que o bloqueio de cookies pode resultar na perda de funcionalidades
            ou restrição de acesso a seções de nosso website.
            <br>
            Como e por que usamos Cookies?<br>
            Empregamos cookies para que, quando você visita nosso website, possamos coletar automaticamente os
            seguintes dados:
            <br>
            a. informações técnicas como o tipo de equipamento que você utiliza (Desktop, celular, tablete ou
            outros), o sistema operacional empregado, o navegador utilizado e o endereço de IP. Estes dados são
            empregados apenas para fins estatísticos e para que possamos corrigir problemas técnicos ou
            aprimorar a experiência de navegação;
            <br>
            b. informações sobre a experiência de navegação em nosso website, como por exemplo as seções
            visitadas, conteúdo e serviços visualizados, o tempo de visualização, referência externas que o
            levaram a nosso website, etc. Estas informações são empregadas para que possamos entender que tipo
            de conteúdo desperta maior interesse e levar a produzir materiais e conteúdos mais assertivos para
            os usuários;
            <br>
            c. informações de natureza pessoal como idioma de navegação e país de origem, utilizado no propósito
            de adotar essas preferências como padrão a cada nova visita sua em nossos portais.
            <br>
            d. Dentre outras informações uteis para o desempenho da empresa e seus parceiros.
            <br>
            Então usamos Cookies para fornecer a melhor experiência de uso, tornando nossas aplicações mais
            fáceis e personalizadas, tendo por base suas escolhas e comportamento de navegação.<br>
            Assim, buscamos entender como você utiliza nossas aplicações e ajustar o conteúdo para torná-lo mais
            relevante para você, além de lembrar de suas preferências.<br>
            Os Cookies participam deste processo porquanto armazenam, leem e executam os dados necessários para
            cumprir com o nosso objetivo.<br>

            GERENCIAMENTO DE COOKIES<br>
            A instalação dos cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores está
            inicialmente configurada para aceitar cookies de forma automática, você pode rever suas permissões a
            qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns cookies
            forem enviados ao seu dispositivo.<br>
            Atualmente, na primeira vez que você acessar nossas aplicações, será requerida a sua concordância
            com a instalação destes. Apenas após a sua aceitação eles serão ativados.<br>
            Dessa maneira, não apenas solicitamos sua concordância, mas também informamos que a navegação
            continuada em nossos sites será entendida como consentimento.<br>
            Como já dito, você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou
            recusar os Cookies. Você também pode configurá-los caso a caso. Todavia, a revogação do
            consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos
            da plataforma.<br>
            Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do
            navegador.
            <br>
            DISPOSIÇÕES FINAIS<br>
            Para nós, a privacidade e confiança são fundamentais na relação com você. Estamos sempre nos
            atualizando para manter os mais altos padrões de segurança.<br>
            Assim, reservamo-nos o direito de alterar esta Política de Cookies a qualquer tempo.<br>
            Ao continuar a navegação nas nossas aplicações após essa mudança se tornar eficaz, você concorda com
            elas. Aconselhamos que você sempre verifique esta Política, bem como a nossa Política de
            Privacidade.<br>
            Qualquer dúvida em relação à nossa Política de Cookies pode ser esclarecida entrando em contato
            conosco.

          </p>
        </div>
      </div>
    </div>

    <footer-mybp v-if="!preload" class="mt-5"></footer-mybp>
  </div>
</template>
<script>
import Api from "@/services/Api";
import TopoMybp from "@/components/Layout/TopoMybp";
import FooterMybp from "@/components/Layout/FooterMybp";
import NavbarMybp from "@/components/Layout/NavbarMybp";
import BannerMybp from "@/components/Layout/BannerMybp";
import Quemsomos from "@/components/Layout/Quemsomos";

export default {
  components: {
    FooterMybp,
    TopoMybp,
    NavbarMybp,
    BannerMybp,
    Quemsomos,
  },
  data() {
    return {
      empresa: null,
      preload: true,
      keyword: "",
    };
  },
  filters: {
    uppercase(valor) {
      return valor.toUpperCase();
    },
  },
  mounted() {
    this.preload = true;
    Api.get(`/${this.$route.params.cliente_slug}`)
        .then(({data}) => {
          this.empresa = data.dados;
          this.preload = false;
        })
        .catch((error) => {
          window.location.href = `/${this.$route.params.cliente_slug}/naoencontrado`;
        });
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
<style lang="scss">
.logo {
  height: 130px;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}


</style>
