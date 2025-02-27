<template>
  <div class="main d-flex flex-column">
    <div class="main-items d-flex flex-column alig-items-center gap-3">
      <h4 class="text-center text-light">Startup 3</h4>
      <h1 class="text-center text-light">Forget About Code</h1>
      <h5 class="text-center text-light">
        Startup Framework gives you complete freedom over your creative
        <span class="d-block"
          >process - you don't have to think about any tchnical aspects. There
          <span class="d-block">are no its and absolutely no coding</span></span
        >
      </h5>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <button class="btn btn-primary">Create an account</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/colors.scss";

.main {
  background: url("@/public/images/hero-image.png");

  .main-items {
    margin-top: 5rem;

    h1 {
      font-size: 4.5rem;
    }
  }
}
</style>
