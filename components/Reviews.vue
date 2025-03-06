<template>
  <div class="reviews">
    <div
      class="reviews-items d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="text-light">
        Our Happy Clients
        <div class="reviews-items-inner mt-5">
          <div
            class="d-flex align-items-start border border-secondary rounded p-lg-5 p-3 p-md-5 p-xl-5 p-sm-3"
          >
            <img src="@/public/images/user4.png" alt="" />
            <div class="ms-4">
              <p>
                "Get a fully retina ready site when
                <span class="d-block">you build with Startup Framework.</span>
                Websites look sharper and more
                <span class="d-block">gorgeous on devices with retina</span>
                display support"
              </p>
              <p>-Rayhan Curran</p>
            </div>
          </div>
          <div
            class="d-flex align-items-start border border-secondary rounded p-lg-5 p-3 p-md-5 p-xl-5 p-sm-3"
          >
            <img src="@/public/images/user2.png " alt="" />
            <div class="ms-4">
              <p>
                "As a business targeting high net
                <span class="d-block">worth individuals, we were looking</span>
                for a slick, cool and mini-malistic
                <span class="d-block"> design for our websitef </span>
              </p>
              <p>- Kayley Frame</p>
            </div>
          </div>
          <div
            class="d-flex align-items-start border border-secondary rounded p-lg-5 p-3 p-md-5 p-xl-5 p-sm-3"
          >
            <img src="@/public/images/user3.png" alt="" />
            <div class="ms-4">
              <p>
                "The most impornant part of the
                <span class="d-block"> Startup Framework is the samples </span>"
              </p>
              <p>- Gene Whitfield</p>
            </div>
          </div>
          <div
            class="d-flex align-items-start border border-secondary rounded p-lg-5 p-3 p-md-5 p-xl-5 p-sm-3"
          >
            <img src="@/public/images/user1.png" alt="" />
            <div class="ms-4">
              <p>
                I've build my website with Startup
                <span class="d-block"
                  >just in one day, and it was ready-
                  <span class="d-block">to-go</span></span
                >
              </p>
              <p>- Allan Kim</p>
            </div>
          </div>
        </div>
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews {
  background-color: #261360;
  padding: 10vh 0;

  .reviews-items-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
}

@media screen and (max-width: 878px) {
  .reviews-items-inner {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    padding: 10px;
    span {
      display: inline !important;
    }
  
  }
}

@media screen and (max-width: 576px) {
  .reviews-items-inner {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    padding: 10px;
    span {
      display: inline !important;
    }
    p{
        font-size:14px;
    }
  }
}
</style>
