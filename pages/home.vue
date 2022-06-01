<template>
<div class="bg-dark-200 home_right">
    <Header />
    <h1>Helloooooo</h1>
    <Bottombar />
</div>
</template>

<script>
import Bottombar from '../components/Bottombar.vue'
import Togglebar from '../components/Togglebar.vue'
import Header from '../components/Header.vue'
  export default{
    layout: "sideviewLayout",
    components: { Bottombar, Togglebar, Header }
}
</script>

<style>
  .home_right{
    position: relative;
    margin-left: 20%;
    width: 80%;
    background-color: #1D1D26;
  }
  @media(max-width: 1024px){
    .home_right{
      width: 100%;
      margin-left: 0%;
    }
  }
</style>
