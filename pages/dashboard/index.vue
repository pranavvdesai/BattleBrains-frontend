<template>
  <div class="home_right pb-48 md:pb-72 lg:pb-24 lg:ml-[20%] xs:w-[100%] lg:w-[80%] overflow-y-scroll bg-dark-200 xs:mb-[8vh] lg:mb-0">
      <Header :headfirst="'👋 Hi Dev, welcome!'" :headsecond="'Learn Web3, the Fun way'"/>
        <div class="home_cards flex flex-col justify-items-center relative xs:top-[120px] lg:top-[85px]" v-if="dataArray">
          <Homecards  v-for='data in dataArray' :key='data.level'  :title="data.title" :description="data.description" :duration="data.totalTime + ' mins'" :references="data.counts.blogs + data.counts.urls" :totalVideos="data.counts.videos" :watched="data.userSpecifics.videoCompleted" :level="toString(data.level)" :lock="!data.userSpecifics.isAccessible" :tags="data.tags"/>
       </div>
  </div>
</template>

<script>
import Togglebar from '@/components/Togglebar.vue'
import Header from '@/components/Header.vue'
import Homecards from '@/components/Homecards.vue'

  export default{
    data(){
      return{
        dataArray: null
      }
    },
    layout: "sideviewLayout",
    components: { Togglebar, Header, Homecards },
    created() {
        this.$engine.contentService.getAllLevels((data) => {
          console.log("Here")
          this.dataArray = data;
        }, null)
    }
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
