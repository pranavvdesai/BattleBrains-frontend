<template>
  <!-- Mobile View -->
  <div class="bottombar justify-around items-center bg-dark-100 fixed bottom-0">
    <NuxtLink to="/home" class="flex p-2">
      <homeIcon :color="'#fff'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/about" class="flex p-2">
      <activityIcon :color="'#fff'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/" class="flex p-2">
      <releaseIcon :color="'#fff'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/" class="flex p-2">
      <supportIcon :color="'#fff'" :size="20" />
    </NuxtLink>
  </div>
</template>

<style>
.bottombar {
  display: none;
}
@media (max-width: 1024px) {
  .bottombar {
    display: flex;
    width: 100%;
    height: 8vh;
  }
}
</style>
