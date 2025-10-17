<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto w-100">
          <li class="nav-item" v-for="item in links" :key="item.name">
            <router-link :to="item.path" class="nav-link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "TopoMybp",
  mounted() {
  },
  data() {
    return {
      links: [
        {name: 'Home', path: `/${this.$route.params.cliente_slug}`},
        {name: 'Sobre', path: `/${this.$route.params.cliente_slug}/quem-somos`},
        {name: 'Vagas Abertas', path: `/${this.$route.params.cliente_slug}/vagas-abertas`},
      ]
    }
  },
};
</script>
<style lang="scss" scoped>

.navbar .navbar-brand {
  font-size: 20px;
}

.navbar .nav-item {
  padding: 10px 20px;
}

.navbar .nav-link {
  font-size: 18px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
}

.navbar .nav-link:hover {
  color: #72b2e7;

}

.fa-bars {
  color: white;
  font-size: 30px;
}

.navbar {
  background-color: var(--color-primary);
}
</style>
