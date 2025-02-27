<template>
  <div>
    <nav class="navbar navbar-expand-lg p-lg-4">
      <div class="container-fluid">
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars" style="color: #ffffff"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-4">
            <li class="nav-item">
              <NuxtLink class="nav-link active text-light" to="/"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#">Features</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#">Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#"
                ><i class="fa-brands fa-dribbble"></i
              ></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#"
                ><i class="fa-brands fa-behance"></i
              ></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  background-color: #956ca6;
  
}

@media screen and (max-width: 576px) {
  .navbar {
    padding: 20px;

    .navbar-nav {
      text-align: center;
      letter-spacing: 3px;
      
    }
  }
}
</style>
