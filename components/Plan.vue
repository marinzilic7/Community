<template>
  <div
    class="plan d-flex flex-column justify-content-center align-items-center"
  >
    <div class="plan-items">
      <h1 class="text-center text-light">Plans & Pricing</h1>
      <p class="text-light text-center">
        Startup Framework is free foreever - you only pay for custom domain
        hosting or top export you site.
      </p>
      <div
        class="items-plan d-flex justify-content-between align-items-center gap-5 mt-5"
      >
        <div class="single-item d-flex flex-column border">
          <h5 class="text-center text-light">Starter</h5>
          <h1 class="text-center text-light">
            $9.99 <span class="fs-6">/month</span>
          </h1>
          <div class=" center-items mt-5 d-flex flex-column  aligin-items-center">
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>2 GB of backups</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>14 days of backups</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Social integrations</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Client Billing</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Remote access</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Custom domain</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">24 hour support</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Admin tools</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Collaboration tools</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">User management</p>
            </div>
            <button
              class="btn btn-transparent text-light mt-5 border border-light w-100"
            >
              Get Started
            </button>
          </div>
        </div>
        <div class="single-item border">
          <h5 class="text-center text-light">Professional</h5>
          <h1 class="text-center text-light">
            $19.99 <span class="fs-6">/month</span>
          </h1>
          <div class="center-items mt-5 d-flex flex-column aligin-items-center">
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>2 GB of backups</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>14 days of backups</p>
            </div>
            <div class="d-flex  gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Social integrations</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Client Billing</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Remote access</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Custom domain</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>24 hour support</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Admin tools</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">Collaboration tools</p>
            </div>
            <div class="ms-4">
              <p class="text-muted">User management</p>
            </div>
            <button class="btn btn-danger text-light mt-5">Get Started</button>
          </div>
        </div>
        <div class="single-item border">
          <h5 class="text-center text-light">Team</h5>
          <h1 class="text-center text-light">
            $49.99 <span class="fs-6">/month</span>
          </h1>
          <div class=" center-items mt-5 d-flex flex-column">
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>2 GB of backups</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>14 days of backups</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Social integrations</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Client Billing</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Remote access</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Custom domain</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>24 hour support</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Admin tools</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>Collaboration tools</p>
            </div>
            <div class="d-flex gap-2">
              <i class="fa-solid fa-check text-success"></i>
              <p>User management</p>
            </div>
            <button
              class="btn btn-transparent text-light border border-light mt-5"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";
.plan {
  background-image: url("@/public/images/plan.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  padding: 100px 0;

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

  .plan-items {
    position: relative;
    z-index: 1;

    .items-plan {
      p {
        color: #fff;
      }

      .single-item {
        padding: 5vh 10vh;
      }
      .text-muted {
        color: rgb(156 163 175) !important;
      }
    }
  }
}

@media screen and (max-width: 576px) {
    .plan {
        padding: 50px 20px;
        .plan-items {
        .items-plan {
            display: grid !important;
            grid-template-columns: repeat(1, 1fr) !important;
            
            gap: 50px;
            .single-item {
            padding: 5vh 5vh;
            }
        }
        }
    }

    .center-items{
        display: flex;
        flex-direction: column;
        align-items:start;
        justify-content: center;
        align-self: center; 
    }
}
</style>
