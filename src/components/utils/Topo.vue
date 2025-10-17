<template>
  <div class="row bg-cinza pb-2 g-0 content">
    <div
      class="col-12 col-md-8 text-left pt-md-3 mt-md-5 p-3 order-md-0 order-1"
    >
      <h2 class="mt-5 mt-sm-5 mt-md-0 titulo-topo">
        <slot name="texto"></slot>
      </h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.titulo-topo {
  font-size: 25px;
  font-weight: bold;
  color: var(--color-primary);
  letter-spacing: -1.5px;
}
.search {
  margin-top: 1rem;
}
.vd {
  border-radius: 3%;
  > iframe {
    border-radius: 3%;
  }
}
.pl-1 {
  padding-left: 1rem;
}
.mt-2rem {
  margin-top: 2rem;
}
.ml-2rem {
  margin-left: 2rem;
}
.mr-2rem {
  margin-right: 2rem;
}
.bg-cinza {
  background-color: #f9f9f9;
}
</style>
