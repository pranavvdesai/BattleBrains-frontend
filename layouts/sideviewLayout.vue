<template>
  <div class="flex screen_sect">
         <SideBar />
          <Nuxt />
  </div>
</template>

<script>
  import SideBar from "../components/SideBar.vue";
  export default{
      components : {
          SideBar
      }
  }
</script>
