<template>
  <div>
    <Togglebar @toggle="toggle" :active="isActive" />
    <div
      class="header bg-dark-100 flex flex-row p-4 items-center justify-between fixed top-0 z-0"
    >
      <div class="head_nav flex flex-col ml-3">
        <h3 class="greeting text-lg g"><b>Hi Dev, Good Evening!</b></h3>
        <p class="learn text-sm l">Learn Web3,the Fun way</p>
        <img
          src="@/assets/images/Iconly-Light-Outline-Arrow - Right Square.svg"
          class="toggler lg:hidden block"
          alt="toggler"
          height="30px"
          width="30px"
          @click="toggle"
        />
      </div>
      <!-- Search -->
      <div class="flex flex-row items-center">
        <div class="search_cont">
          <label class="relative block search_outer z-0">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                class="h-5 w-5 search"
                viewBox="0 0 20 20"
                xmlns="@/assets/images/Iconly-Light-Outline-Search.svg"
              ></svg>
            </span>
            <input
              class="sfield placeholder:text-slate-400 block bg-dark-100 w-full border border-light-100 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>
        <!--Notification-->

        <!-- <notificationIcon :color="'#fff'" :size="20"/> -->
        <notificationIcon :color="'#fff'" :size="20" class="mx-5" />

        <!--Dropdown-->
        <div class="relative">
          <!-- Dropdown toggle button -->
          <button
            @click="show = !show"
            class="flex items-center p-2 text-indigo-100 bg-white rounded drop_btn"
          ></button>
          <!-- Dropdown menu -->
          <div
            v-show="show"
            class="absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44 z-10"
          >
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-sm text-indigo-100 hover:bg-dark-100 hover:text-white"
            >
              Dropdown List 1
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-sm text-indigo-100 hover:bg-dark-100 hover:text-white"
            >
              Dropdown List 2
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-sm text-indigo-100 hover:bg-dark-100 hover:text-white"
            >
              Dropdown List 3
            </NuxtLink>
          </div>
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
export default {
  data() {
    return {
      isActive: false,
      show: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  components: { Togglebar, NotificationIcon },
};
</script>

<style>
.header {
  width: 80%;
  height: 10vh;
}
.search {
  fill: whitesmoke;
}
.notify,
.toggler {
  filter: invert(1);
}

.sfield {
  color: white;
}

.drop_btn {
  border-radius: 50%;
  background-image: url("https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30px;
  width: 30px;
}

@media (max-width: 1024px) {
  .g,
  .l {
    display: none;
  }
  .header {
    width: 100%;
  }
  .search_outer {
    width: 75%;
  }
  .search_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 11vh;
    margin: 0px auto;
    width: 100%;
    left: 0%;
  }
}
</style>
