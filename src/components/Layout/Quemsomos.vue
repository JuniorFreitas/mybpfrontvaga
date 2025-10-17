<template>
  <div class="container">
    <div class="row" v-if="montisol">
      <div class="col-12 mb-3">
        <h3>Sobre</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          O time Montisol vem mostrando há mais de três décadas que comprometimento e qualidade são características
          de gente
          que trabalha pensando sempre em entregar os melhores resultados. Esse empenho e amor pela profissão vem do
          reconhecimento e do cuidado com os (as) colaboradores (as), que recebem a devida atenção, além das
          diversas
          oportunidades de qualificação profissional. Afinal, valorizar e capacitar aqueles (as) que estão conosco é
          a
          melhor forma de dizer que somos uma equipe.
          <br><br>
          Fundada em 1988, na cidade de São Luís - MA, a Montisol vem se tornando referência em soluções
          personalizadas de
          paradas de manutenção, construção e montagem e manutenção industrial. Com sede em São Luís - MA e filial
          em
          Barcarena - PA, contamos com mais de 2 mil profissionais responsáveis pelo crescimento e pelo sucesso da
          Montisol,
          e que fazem parte da nossa consolidação como uma empresa que preza pela qualidade dos serviços, com foco
          na
          satisfação dos nossos clientes.
          <br><br>
          Fortalecidos por uma equipe gerencial consistente, em que o respeito e o bom relacionamento fazem parte de
          todas
          as decisões, possuímos também um sistema de gestão robusto onde nossos (as) colaboradores (as)
          compartilham dos
          pilares da Missão Montisol: Mais Segurança, Mais Qualidade e Mais Entregas dentro do prazo, todos os dias.
          Mais: a Montisol investe constantemente em segurança, inovação tecnológica e melhoria dos processos
          produtivos,
          buscando - no mercado nacional e internacional - oportunidades de aprimoramento e desenvolvimento de novas
          ferramentas ou tecnologias que mitiguem a exposição dos nossos colaboradores, aumentem a produtividade e
          reduzam
          custos para nossos clientes. Na prática, que proporcionem um serviço de alto valor agregado a um
          relacionamento
          duradouro!
          <br><br>
          Políticas de ESG: Construindo uma política social e sustentável consistente, a Montisol adere práticas que
          contemplam a inclusão, combate às diversas formas de preconceito, além da propagação das boas práticas que
          envolvam a saúde mental dos (as) colaboradores (as). Um grande exemplo é o aumento do número de mulheres
          em nossos
          times, que teve em 2023 um aumento de 141% em relação a 2022.
        </p>
      </div>
      <div class="col-12 mb-3">
        <h3>Missão</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          Atuar na indústria de forma ética, socialmente responsável, segura e rentável, fornecendo soluções
          personalizadas às necessidades de nossos clientes, tendo como requisitos a segurança, a qualidade e o prazo de
          entrega.
        </p>
      </div>

      <div class="col-12 mb-3">
        <h3>Visão</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          Ser reconhecida como uma empresa de excelência no segmento industrial, oferecendo aos nossos clientes,
          colaboradores e fornecedores uma relação duradoura, com foco no crescimento, rentabilidade e responsabilidade
          socioambiental, até 2025.
        </p>
      </div>

      <div class="col-12 mb-3">
        <h3>Valores</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          - Colocar as pessoas em posição de destaque.<br>
          - Promover o bem-estar socioambiental (ESG).<br>
          - Defender a honestidade.<br>
          - Nutrir nossa paixão pelo trabalho.<br>
          - Fomentar a cultura da inovação.<br>
          - Valorizar e reconhecer empenhos individuais.<br>
          - Promover a responsabilidade e o comprometimento como se fôssemos donos.<br>
          - Promover a busca incessante da excelência.<br>
        </p>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-12 mb-3">
        <h3>Missão</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          {{ dadosempresa.missao }}
        </p>
      </div>
      <div class="col-12 mb-3">
        <h3>Visão</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          {{ dadosempresa.visao }}
        </p>
      </div>
      <div class="col-12 mb-3">
        <h3>Valores</h3>
        <p class="texto text-justify" style="font-size: 1rem; text-align: justify">
          {{ dadosempresa.valores }}
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TopoMybp",
  mounted() {
  },
  props: {
    montisol: {
      type: Boolean,
      default: false,
    },
    dadosempresa: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
