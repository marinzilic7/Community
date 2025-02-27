<template>
  <div class="content">
    <div class="main-content">
      <p class="text-center">Free Sample</p>
      <h1 class="text-center mt-3">
        Powerful Generator and Free <span class="d-block">Figma Sources</span>
      </h1>
      <p class="text-center mt-3">
        Startup Framework contains components and complex blocks which can
        easely be
        <span class="d-block"
          >integrated into almost any design. All of the components are made in
          the same style, and
          <span class="d-block"
            >can easily be integrated into projects, allowin you to create
            hundreds of solutions.</span
          ></span
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";
.content {
  padding: 100px 0;
  position: relative;
  z-index: 3;

  .main-content {
    position: relative;
    z-index: 3;
    h1{
        font-weight: 900;
        letter-spacing: 3px;
    }
  }
}

@media screen and (max-width: 576px) {
  .d-block {
    display: inline !important;
  }
}
</style>
