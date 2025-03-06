<template>
  <div id="features" class="features">
    <div class="features-items d-flex align-items-center position-relative z-3">
      <div class="img-items flex-grow-1 position-relative">
        <img
          src="/images/macbook.png"
          alt="macbook-img"
          class="macbook-img-class"
        />
        <img src="/images/screen.png" class="screen" alt="screen" />
      </div>
      <div class="first-items flex-grow-1">
        <h1 class="text-light">We Create Something New</h1>
        <p class="text-light mt-3 fs-5">
          We have created a new product that will help designers, developers and
          companies create
          <span class="d-block">
            websites for their startups quickly and easily.
          </span>
        </p>
        <div class="d-lg-flex gap-5 mt-5">
          <div class="mt-5">
            <NuxtImg src="/images/feature-icon.png" alt="feature-icon" />
            <p class="text-light mt-3">30 NEW FEATURE PAGES</p>
            <p class="text-light">
              Startup Framework contains components and
              <span class="d-block">complex blocks which can easily.</span>
            </p>
          </div>
          <div class="mt-5">
            <i class="fa-regular fa-gem text-light fs-2"></i>
            <p class="text-light mt-3">USEFUL SYMBOL COMPONENTS</p>
            <p class="text-light">
              Samples will show you the feeling on how to play
              <span class="d-block">around using the components.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/components/_features.scss";
@import "@/assets/media/_features.scss";

</style>
