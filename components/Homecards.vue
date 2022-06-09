 <template>
<div class="relative z-10">
  <div class="absolute" v-bind:class="lock && 'lock_pos'" v-if="lock"><LightOutlineLock :size="25" :color="'#fff'"/></div>
  <div class="flex h-1/2 lg:h-72 mt-5 px-5 relative lg:px-10">
    <div class="bg-dark-200 hover:shadow-[0_0_30px_5px_rgba(0,0,0,1)] hover:shadow-dark-100 rounded-2xl w-full flex justify-between flex-col lg:flex-row z-10 relative">
      <div class="lock_back absolute h-full w-full bg-black opacity-50 rounded-2xl" v-if="lock"></div>
        <!-- 1 -->
        <div class="flex flex-col justify-between p-6 w-full lg:w-1/2 lg:h-full">
          <div class="">
            <div class="flex sm:flex-row xs:flex-col">
              <div v-for="(tag,index) in tags">
                <h1 class="mr-4 font-josefin" v-bind:class="(index%3==0 && 'text-blue-300') || (index%3==1 && 'text-pink') || (index%3==2 && 'text-yellow')">{{tag}}</h1>
              </div>
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
        <div class="w-full h-[200px] lg:w-1/2 lg:h-full rounded-2xl xs:relative">
            <!-- img -->
            <div class="xs:absolute h-full w-full rounded-2xl">
               <img class="z-30 xs:absolute h-full w-full rounded-2xl" src="https://c4.wallpaperflare.com/wallpaper/936/709/65/sci-fi-world-futuristic-city-skyscrapers-fantasy-wallpaper-preview.jpg" alt="image" />
            </div>
            <!-- gradient div -->
            <div class="xs:absolute z-40 h-full w-full xs:bg-gradient-to-b lg:bg-gradient-to-r from-dark-200/100 to-dark-200/75">
            </div>
          <div class="z-50 border-2 rounded-lg lg:right-5 pt-1 lg:top-5 border-blue-300 text-center w-[125px] h-[35px] m-2.5 xs:absolute xs:right-2.5 xs:bottom-2.5">
            <p class="text-white font-josefin self-center">{{ level }}</p>
          </div>
        </div>
        </div>
      </div>
</div>
</template>

<style>
 .lock_back{
   z-index: 100;
 }
 .lock_pos{
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   z-index: 100;
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
    },
    tags: {
      type: Array
    }
  },
  components: {BoldTimeCircleIcon, BoldPaperIcon, LightOutlineLock }
}

</script>
