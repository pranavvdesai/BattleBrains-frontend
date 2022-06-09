<template>
  <!-- Mobile View -->
  <div class="bottombar justify-around items-center bg-dark-100 fixed bottom-0">
    <NuxtLink to="/home" class="flex p-2">
      <homeIcon :color="'#fff'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/analytics" class="flex p-2">
      <activityIcon :color="'#9898B3'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/" class="flex p-2">
      <releaseIcon :color="'#9898B3'" :size="20" />
    </NuxtLink>
    <NuxtLink to="/support" class="flex p-2">
      <supportIcon :color="'#9898B3'" :size="20" />
    </NuxtLink>
  </div>
</template>

<script>
import homeIcon from "./icons/homeIcon";
import activityIcon from "./icons/activityIcon";
import releaseIcon from "./icons/releaseIcon";
import supportIcon from "./icons/supportIcon";


export default {
  name: "leftsidebar",
  components: {
    homeIcon,
    activityIcon,
    releaseIcon,
    supportIcon
  },
};
</script>


<style>
.bottombar {
  display: none;
}
@media (max-width: 1024px) {
  .bottombar {
    display: flex;
    width: 100%;
    height: 8vh;
    z-index: 90;
  }
}
</style>
