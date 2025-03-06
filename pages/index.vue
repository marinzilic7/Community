<template>
  <div class="main">
    <Navbar class="navbar-nav" />
    <div class="main-items d-flex flex-column gap-3">
      <h4 class="startup-text text-center text-light">Startup 3</h4>
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
  <Content />
  <Features />
  <Auth />
  <Reviews/>
</template>

<style scoped lang="scss">
@import "@/assets/colors.scss";

.main {
  background-image: url("@/public/images/hero-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $background-color;
    opacity: 0.5;
  }

  .main-items {
    position: relative;
    z-index: 1;
    h1 {
      font-size: 3.5rem;
    }

    .startup-text {
      margin-top: 10rem;
    }
  }

  button {
    background-color: $button-color;
    border: none;
    border-radius: 20px;
    position: relative;
    z-index: 1;
  }
}

@media screen and (max-width: 576px) {
  .main {
    .main-items {
      h1 {
        font-size: 2.5rem;
      }
      h5 {
        font-size: 1rem;
        .d-block {
          display: inline !important;
        }
      }
    }
  }
}
</style>
