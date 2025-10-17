<template>
  <div id="app">
    <div class="d-flex" v-if="showMenu">
      <menu-lateral></menu-lateral>
      <router-view></router-view>
    </div>

    <router-view v-if="!showMenu"></router-view>
  </div>
</template>
<script>
import menuLateral from "@/components/Layout/menuLateral.vue";
export default {
  components: {
    menuLateral,
  },
  computed: {
    showMenu() {
      return this.$route.meta.menu;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

</style>
