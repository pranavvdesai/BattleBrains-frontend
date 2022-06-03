<template>
  <div class="home_right pb-48 md:pb-72 lg:pb-24">
      <Header :headfirst="'👋 Hi Dev, welcome!'" :headsecond="'Learn Web3, the Fun way'"/>
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
            lock : false
          },
          {
            title : 'Why Blockchain?',
            desc : 'The third generation of the web promises to put us in control of our data...',
            duration : '70mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Moderate',
            lock : true
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
    margin-left: 20%;
    width: 80%;
    background-color: #1D1D26;
  }
  .home_cards{
    position: relative;
    top: 8vh;
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
