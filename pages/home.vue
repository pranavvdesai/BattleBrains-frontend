<template>
  <div class="home_right pb-48 md:pb-72 lg:pb-24 lg:ml-[20%] xs:w-[100%] lg:w-[80%] overflow-y-scroll bg-dark-200 xs:mb-[8vh] lg:mb-0">
      <Header :headfirst="'👋 Hi Dev, welcome!'" :headsecond="'Learn Web3, the Fun way'"/>
        <div class="home_cards flex flex-col justify-items-center relative xs:top-[20vh] lg:top-[9vh]" v-for='data in dataArray' :key='data.title'>
          <Homecards :title="data.title" :description="data.desc" :duration="data.duration" :references="data.references" :totalVideos="data.totalVideos" :watched="data.watched" :level="data.level" :lock="data.lock" :tags="data.tags"/>
       </div>
  </div>
</template>

<script>
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
            duration : '66 mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Beginner',
            lock : false,
            tags : ['INTRODUCTION','NFT','DEFI']
          },
          {
            title : 'Why Blockchain?',
            desc : 'The third generation of the web promises to put us in control of our data...',
            duration : '70 mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Moderate',
            lock : true,
            tags : ['INTRODUCTION','NFT','DEFI']
          },
           {
            title : 'Why Blockchain?',
            desc : 'The third generation of the web promises to put us in control of our data...',
            duration : '70 mins',
            references : 5,
            totalVideos : 4,
            watched : 2,
            level : 'Moderate',
            lock : true,
            tags : ['INTRODUCTION','NFT','DEFI']
          },
          
        ]
      }
    },
    layout: "sideviewLayout",
    components: { Togglebar, Header, Homecards }
}
</script>

<style>
  ::-webkit-scrollbar{
    background-color: #1D1D26;
  }
  @media(max-width: 1024px){
    ::-webkit-scrollbar{
      display: none;
    }
  }
</style>
