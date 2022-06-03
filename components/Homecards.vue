<template>
<div class="relative">
    <div class="absolute" v-bind:class="lock && 'lock_pos'" v-if="lock"><LightOutlineLock :size="30" :color="'#fff'"/></div>
  <div class="flex h-1/2 lg:h-96 mt-10 px-5 relative">
    <div class="rightSideBar bg-dark-200 rounded-lg w-full flex justify-between flex-col md:flex-row lg:flex-row z-10 relative">
      <div class="absolute" v-bind:class="lock && 'lock'"></div>
        <!-- 1 -->
        <div class="flex flex-col justify-between p-5 w-full lg:w-1/2 lg:h-full">
          <div class="">
            <div class="flex text-sm font-medium">
              <p class="mr-6 text-[#01E3FF]">INTRODUCTION</p>
              <p class="mr-6 text-[#FF01EC]">WEB3</p>
              <p class="mr-6 text-[#3AFF01]">NFTS</p>
            </div>
            <div class="font-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-1">
              <p>{{ title }}</p>
            </div>
            <div class="text-[#9CA3AF] font-medium lg:w-2/3 text-lg mt-5">
              {{ description }}
            </div>
          </div>
          <div class="flex text-white flex-col lg:flex-row justify-between">
            <div class="flex mt-2">
              <p class="mr-1">{{ watched }}/{{ totalVideos }} Videos</p>
              <div class="bg-white w-24 h-3 items-center rounded-lg mt-2 ">
                <div class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-lg "></div>
              </div>
            </div>
            <div class="flex items-center mt-2">
              <img class="w-4 h-4" src="../assets/images/boldtime.png" alt="" />
              <p class="mx-1">{{ duration }}</p>
            </div>
            <div class="flex items-center mt-2">
              <BoldPaperIcon :size="20" :color="'#fff'" />
              <p class="mx-1">{{ references }} references</p>
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="w-full lg:w-1/2 lg:h-full second rounded-lg">
          <div class="text-white border-4 rounded-md font-medium px-5 pb-1 right-10 lg:top-5 beg_btn border-[#0b0ed8]">
            {{ level }}
          </div>
        </div>
        </div>
      </div>
</div>
</template>

<style>
 .second {
   background-image: linear-gradient(to right, rgb(29, 29, 38), transparent), url("https://imgs.search.brave.com/zybFB5vn8vbu6VPp8iQp4I-raQzJC2GpRQVQY1Saxtg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmhvdGNhcnNp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9v/bmUtY2FyLWdhcmFn/ZS5qcGc");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: flex-end;
 }

 .beg_btn {
   width: 125px;
   text-align: center;
   height: 35px;
   margin: 10px;
 }
 .lock{
   background-color: black;
   height: 100%;
   width: 100%;
   z-index: 20;
   opacity: 0.5;
 }
 .lock_pos{
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   opacity: 1;
   z-index: 100;
 }

 @media(max-width: 1024px) {
   .second {
     position: relative;
     height: 200px;
   }

   .beg_btn {
     position: absolute;
     bottom: 10px;
     right: 20px;
   }

   .second {
     background-image: linear-gradient(to bottom, rgb(29, 29, 38), transparent), url("https://imgs.search.brave.com/zybFB5vn8vbu6VPp8iQp4I-raQzJC2GpRQVQY1Saxtg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmhvdGNhcnNp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9v/bmUtY2FyLWdhcmFn/ZS5qcGc");
   }
 }
</style>

<script>
import BoldPaperIcon from './icons/boldPaperIcon.vue';
import LightOutlineLock from './icons/lightOutlineLock.vue';
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    duration: {
      type: String
    },
    references: {
      type: Number
    },
    totalVideos: {
      type: Number
    },
    watched: {
      type: Number
    },
    level: {
      type: String
    },
    lock: {
      type: Boolean
    }
  },
  components: { BoldPaperIcon, LightOutlineLock }
}

</script>