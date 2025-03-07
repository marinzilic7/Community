<template>
  <div data-aos="fade-right"
    class="auth-items d-flex flex-wrap justify-content-evenly align-items-center mt-5 p-5"
  >
    <div>
      <h1>
        We solve digital problems with an
        <span class="d-block">outstanding creative flare</span>
      </h1>
      <p>
        We have created a new product that will help designers, developers and
        <span class="d-block"
          >companies create websites for threir startups quickly and
          easily.</span
        >
      </p>
    </div>
    <div class="col-lg-4 col-md-10' col-sm-12 col-12 col-xl-5">
      <form class="form-items border p-5">
        <h5 class="text-center mb-3">SIGN IN</h5>
        <div class="mb-3">
          <input
            type="email"
            placeholder="Email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 mt-5">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="login-btn btn btn-primary w-100 mt-3">
          Login
        </button>
        <div
          class="mt-4 d-flex justify-content-evenly align-items-center gap-5"
        >
          <hr class="w-50 border-dark" />

          <p class="mt-3">OR</p>
          <hr class="w-50 border-dark" />
        </div>

        <button type="submit" class="facebook-btn btn btn-primary w-100 mt-3">
          Login with Facebook
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/components/auth.scss";
@import "@/assets/media/auth.scss";
</style>
