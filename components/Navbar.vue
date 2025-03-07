<script setup>
import { ref, onMounted } from "vue";

const isCollapsed = ref(false);

onMounted(() => {
  const navbar = document.querySelector(".navbar");
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  navbarCollapse.addEventListener("show.bs.collapse", () => {
    isCollapsed.value = true;
  });

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    isCollapsed.value = false;
  });
});
</script>

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg mt-lg-4 p-lg-5"
      :class="{ 'bg-active': isCollapsed }"
    >
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
              <NuxtLink class="nav-link text-light" to="#features"
                >Features</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#plan">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-light" to="#team">Our Team</NuxtLink>
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
  </div>
</template>

<style lang="scss" scoped>

@import "@/assets/components/_navbar.scss";
@import "@/assets/media/_navbar.scss";


</style>
