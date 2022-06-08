<template>
  <div class="flex">
    <SideBar />
    <Nuxt />
    <Bottombar />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Bottombar from "../components/Bottombar.vue";
export default {
  components: {
    SideBar,
    Bottombar
  }
}
</script>
