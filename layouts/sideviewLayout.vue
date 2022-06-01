<template>
  <section class="h-screen flex">
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
