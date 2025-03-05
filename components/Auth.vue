<template>
  <div
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

<style scoped lang="scss">
@import "@/assets/colors.scss";

.auth-items {
  padding: 100px 10px !important;

  .form-items {
    border-radius: 20px;
    input {
      border-radius: 20px;
      padding: 10px 20px;
    }
    .login-btn {
      background-color: $account-button;
      border: none;
      border-radius: 20px;
    }
    .facebook-btn {
      background-color: #1877f2;
      border: none;
      border-radius: 20px;
    }
  }
}

@media screen and (max-width: 878px) {
  .auth-items {
    display: flex;
    flex-direction: column;
    padding: 0 2vh 5vh 2vh !important;
    
  }
  .d-block {
    display: inline !important;
  }
}

@media screen and (max-width: 576px) {
  .auth-items {
    padding: 0 2vh 5vh 2vh !important;
    .form-items{
        padding: 20px 10px !important;
        margin-top: 20px;
    }
  }
  .d-block {
    display: inline !important;
  }
}
</style>
