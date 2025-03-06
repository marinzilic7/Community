<template>
  <div class="setup">
    <div class="setup-items">
      <h1 class="text-light text-center">Easy to setup.</h1>
      <h1 class="text-light text-center">Easy to maintain</h1>
      <p class="text-light text-center mt-3">
        Bootstrap is widely-used, sleek, intuitive and powerful
        <span class="d-block"
          >front-end framework for faster and easier web development
        </span>
      </p>
      <div class="d-flex justify-content-center align-items-center gap-5 mt-5">
        <i class="fa-solid fa-play text-light bg-danger"></i>
        <button class="btn btn-success">Get Started</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.setup {
  padding: 150px 0;
  background-image: url("@/public/images/hero-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;

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

  h1,
  p,
  button,
  i {
    position: relative;
    z-index: 3;
  }

  i.fa-play {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: darkred;
      transform: scale(1.1);
    }
  }
}
</style>
