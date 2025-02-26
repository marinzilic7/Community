<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Features</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Be</NuxtLink>
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
