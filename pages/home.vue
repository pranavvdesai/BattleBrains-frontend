<template>
  <div class="home_right">
      <Header />
        <div class="home_cards">
          <Homecards />
        </div>
      <Bottombar />
  </div>
</template>

<script>
import Bottombar from '../components/Bottombar.vue'
import Togglebar from '../components/Togglebar.vue'
import Header from '../components/Header.vue'
import Homecards from '../components/Homecards.vue'

  export default{
    layout: "sideviewLayout",
    components: { Bottombar, Togglebar, Header, Homecards }
}
</script>

<style>
  .home_right{
    position: relative;
    margin-left: 20%;
    width: 80%;
    background-color: #1D1D26;
  }
  .home_cards{
    position: relative;
    top: 10vh;
  }
  @media(max-width: 1024px){
    .home_right{
      width: 100%;
      margin-left: 0%;
    }
    .home_cards{
      top: 17vh;
    }
  }
</style>
