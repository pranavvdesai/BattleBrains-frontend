<template>
<div class="home_right">
    <h1>Hell</h1>
    <Togglebar />
    <Bottombar />
</div>
</template>

<script>
import Bottombar from '../components/Bottombar.vue'
import Togglebar from '../components/Togglebar.vue'
  export default{
    layout: "sideviewLayout",
    components: { Bottombar, Togglebar }
}
</script>

<style>
  .home_right{
    position: relative;
    margin-left: 20%;
    width: 80%;
    background-color: aqua;
  }
  @media(max-width: 1024px){
    .home_right{
      width: 100%;
      margin-left: 0%;
    }
  }
</style>