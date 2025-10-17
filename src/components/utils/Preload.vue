<template>
  <div>
    <div class="spinner-border text-primary spinner mb-3" role="status"></div>
    <div class="msgTxt">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "Preload",
  props: {
    msg: {
      type: String,
      default: "Carregando...",
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.spinner {
  float: left;
}
.msgTxt {
  margin-left: 12px !important;
  float: left;
}
</style>
