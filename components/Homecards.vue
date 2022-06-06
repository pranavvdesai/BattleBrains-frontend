 <template>
<div class="relative z-10">
  <div class="absolute" v-bind:class="lock && 'lock_pos'" v-if="lock"><LightOutlineLock :size="25" :color="'#fff'"/></div>
  <div class="flex h-1/2 lg:h-72 mt-5 px-5 relative lg:px-10">
    <div class="rightSideBar bg-dark-200 hover:shadow-[0_0_30px_5px_rgba(0,0,0,1)] hover:shadow-dark-100 rounded-2xl w-full flex justify-between flex-col md:flex-row lg:flex-row z-10 relative">
      <div class="absolute" v-bind:class="lock && 'lock'"></div>
        <!-- 1 -->
        <div class="flex flex-col justify-between p-6 w-full lg:w-1/2 lg:h-full">
          <div class="">
            <div class="flex sm:flex-row xs:flex-col">
              <p class="mr-6 text-[#01E3FF] text-md">INTRODUCTION</p>
              <p class="mr-6 text-[#FF01EC] text-md">WEB3</p>
              <p class="mr-6 text-[#3AFF01] text-md">NFTS</p>
            </div>
            <div class="font-black text-white text-xl sm:text-xl md:text-3xl lg:text-3xl my-3">
              <p>{{ title }}</p>
            </div>
            <div class="text-dark-500 font-josefin lg:w-2/3 text-lg my-5">
              {{ description }}
            </div>
          </div>
          <div class="flex text-white flex-col lg:flex-row justify-between">
            <div class="flex items-center mt-3">
              <p class="mr-3 text-dark-700 font-josefin text-sm">{{ watched }}/{{ totalVideos }} Videos</p>
              <div class="bg-white w-24 h-3 items-center rounded-2xl">
                <div class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-2xl"></div>
              </div>
            </div>
            <div class="flex items-center mt-3">
              <BoldTimeCircleIcon :size="16" :color="'#fff'" />
              <p class="mx-3 text-dark-700 font-josefin text-sm">{{ duration }}</p>
            </div>
            <div class="flex items-center mt-3">
              <BoldPaperIcon :size="16" :color="'#fff'" />
              <p class="mx-3 text-dark-700 font-josefin text-sm">{{ references }} references</p>
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="w-full lg:w-1/2 lg:h-full second rounded-2xl">
          <div class="border-2 rounded-lg right-10 pt-1 lg:top-10 beg_btn border-blue-300">
            <p class="text-white font-josefin self-center">{{ level }}</p>
          </div>
        </div>
        </div>
      </div>
</div>
</template>

<style>
 .second {
   background-image: linear-gradient(to right, rgba(29, 29, 38, 1), rgba(29, 29, 38, 0.7)), url("https://c4.wallpaperflare.com/wallpaper/936/709/65/sci-fi-world-futuristic-city-skyscrapers-fantasy-wallpaper-preview.jpg");
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
   border-radius: 1rem;
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
     background-image: linear-gradient(to bottom, rgba(29, 29, 38, 1), rgba(29, 29, 38, 0.7)), url("https://c4.wallpaperflare.com/wallpaper/936/709/65/sci-fi-world-futuristic-city-skyscrapers-fantasy-wallpaper-preview.jpg");
   }
 }
</style>

<script>
import BoldPaperIcon from './icons/boldPaperIcon.vue';
import BoldTimeCircleIcon from './icons/boldTimeCircleIcon.vue';
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
  components: {BoldTimeCircleIcon, BoldPaperIcon, LightOutlineLock }
}

</script>
