<template>
  <div class="home_right pb-36">
      <Header />
        <div class="home_cards" v-for='data in dataArray' :key='data.title'>
          <Homecards :title="data.title" :description="data.desc" :duration="data.duration" :references="data.references" :totalVideos="data.totalVideos" :watched="data.watched" :level="data.level" :lock="data.lock"/>
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
    data(){
      return{
        dataArray:[
          {
            title : 'Why Web3?',
            desc : 'The third generation of the web promises to put us in control of our data...',
            duration : '66mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Begginer',
            lock : 0
          },
          {
            title : 'Why Blockchain?',
            desc : 'The third generation of the web promises to put us in control of our data...',
            duration : '70mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Moderate',
            lock : 1
          }
        ]
      }
    },
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
    /* overflow: scroll; */
    /* height: auto */
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
