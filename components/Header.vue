<template>
  <div>
    <Togglebar @toggle="toggle" :active="isActive" />
    <div
      class="bg-dark-200 flex flex-row p-4 items-center justify-between fixed top-0 z-50 xs:w-full lg:w-[80%]"
    >
      <div class="head_nav flex flex-col ml-3">
        <div class="xs:hidden lg:flex lg:flex-row">
          <div class="ml-2">
            <h3 class="text-lg font-mont text-dark-700 tracking-wide">
              <b>{{headfirst}}</b></h3>
            <p class="text-sm font-josefin text-dark-500">{{headsecond}}</p>
          </div>
        </div>

        <div @click="toggle" class="toggler lg:hidden xs:block">
          <menuIcon
            :color="'#fff'"
            :size="20"
          />
        </div>
      </div>
      <!-- Search -->
      <div class="flex flex-row items-center">
        <div class="search_cont bg-dark-200"  v-if="$route.name === 'home'">
          <label class="relative block w-5/6 z-0 lg:w-full">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon :color="'#9898B3'" :size="20"/>
            </span>
            <input
              class="text-white placeholder:text-dark-500 font-josefin block bg-dark-300 w-full rounded-lg py-2 pl-10 pr-3 shadow-sm sm:text-sm outline-0 z-20"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>
        <!--Notification-->

        <!-- <notificationIcon :color="'#fff'" :size="20"/> -->
        <notificationIcon :color="'#fff'" :size="20" class="mx-5" />

        <div class="relative z-10">
          <!-- Dropdown toggle button -->
          <button
            @click="show = !show"
            class="flex items-center p-2 text-indigo-100 bg-white rounded-full h-[30px] w-[30px] bg-cover bg-no-repeat bg-center bg-[url('https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=')]"
          ></button>
        </div>

        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Togglebar from "./Togglebar.vue";
import NotificationIcon from "./icons/notificationIcon.vue";
import SearchIcon from "./icons/searchIcon"
import menuIcon from "./icons/menuIcon";

export default {

  data() {
    return {
      isActive: false,
      show: false,
    };
  },
  props:{
    headfirst : {
      type : String
    },
    headsecond : {
      type : String
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  components: { Togglebar, NotificationIcon, SearchIcon, menuIcon },
};
</script>

<style>
@media (max-width: 1024px) {
  .search_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 8vh;
    margin: 0px auto;
    width: 100%;
    left: 0%;
    padding: 15px;
  }
}
</style>
