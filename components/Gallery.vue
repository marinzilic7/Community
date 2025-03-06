<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center"
  >
    <div class="main-gallery-items">
      <div class="d-flex justify-content-between align-items-center mt-5">
        <h1>Last Works</h1>
        <button class="btn btn-primary">View all Works</button>
      </div>
      <div class="gallery-items mt-5">
        <div>
          <img src="@/public/images/photo1.png" alt="" />
          <p class="mt-2 mt-lg-4 mt-md-3 mt-sm-2 mt-xl-4">UI KIT</p>
          <h2>Mozart Project</h2>
        </div>
        <div>
          <img src="@/public/images/photo2.png" alt="" />
          <p class="mt-2 mt-lg-4 mt-md-3 mt-sm-2 mt-xl-4">Framework</p>
          <h2>Startup Framework 2.0</h2>
        </div>
        <div>
          <img src="@/public/images/photo3.png" alt="" />
          <p class="mt-2 mt-lg-4 mt-md-3 mt-sm-2 mt-xl-4">UI PHOTOS</p>
          <h2>Fromo the Sky</h2>
        </div>
        <div>
          <img src="@/public/images/photo4.png" alt="" />
          <p class="mt-2 mt-lg-4 mt-md-3 mt-sm-2 mt-xl-4">Pictures</p>
          <h2>Air Forces</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";
.container {
  padding: 100px 0;
  button {
    background-color: $button-color;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
  }
  .gallery-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media screen and (max-width: 878px) {
  .gallery-items {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    img {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 576px) {
  .main-gallery-items {
    padding: 0 10px;
  }
  .gallery-items {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    img {
      max-width: 100%;
    }
  }
}
</style>
