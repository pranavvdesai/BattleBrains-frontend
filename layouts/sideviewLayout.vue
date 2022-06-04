<template>
  <section class="flex screen_sect">
         <SideBar />
          <Nuxt />
  </section>
</template>

<script>
  import SideBar from "../components/SideBar.vue";
  export default{
      components : {
          SideBar
      }
  }
</script>

<style>
  .screen_sect{
    height: auto;
  }
</style>