<template>
  <header id="header">
    <div class="container">
      <div class="m-auto">
        <img :src="dadosempresa.logo[0].urlThumb" alt="" class="img-fluid mb-2 mt-2"
             :style="dadosempresa.logo[0].layout === 'retrato' ? 'max-height: 120px' :'max-height: 80px'">
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapState} from "vuex";

export default {
  name: "TopoMybp",
  components: {},
  props: {
    dadosempresa: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {

  },

  computed: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.rodape {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
  text-align: center;
}

.rodape > .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /*max-width: 1200px;*/
  margin: 0 auto;
}


.rodape h2 {
  color: #fff;
  border-bottom: 1px dashed #fff;
  padding-bottom: 10px;
}

.rodape a {
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color 0.3s;
}

.rodape a:hover {
  color: #fff;
}

.creditos {
  margin-top: 20px;
}

.creditos p {
  color: #ccc;
  font-size: 14px;
}

.creditos a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.creditos a:hover {
  color: #063a73;
}

.banner {
  width: 100%;
  /*height: 30vw;*/
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

</style>
