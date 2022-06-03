<template>
  <div>
    <Togglebar @toggle="toggle" :active="isActive" />
    <div
      class="header bg-dark-200 flex flex-row p-4 items-center justify-between fixed top-0 z-0"
    >
      <div class="head_nav flex flex-col ml-3">
        <div class="flex flex-row">
          <div class="ml-2">
            <h3
              class="greeting text-xl g font-mont text-dark-600 tracking-wide my-2"
            >
              <b>Have a suggestion / need assistance / want to contribute?</b>
            </h3>
            <p class="learn text-sm l font-josefin text-dark-500">
              Write to us and we'll get back to you in no time!
            </p>
          </div>
        </div>

        <div @click="toggle" class="toggler lg:hidden block">
          <menuIcon :color="'#fff'" :size="20" />
        </div>
      </div>

      <div class="flex flex-row items-center">
        <!-- <notificationIcon :color="'#fff'" :size="20"/> -->
        <notificationIcon :color="'#fff'" :size="20" class="mx-5" />

        <div class="relative">
          <!-- Dropdown toggle button -->
          <button
            @click="show = !show"
            class="flex items-center p-2 text-indigo-100 bg-white rounded drop_btn"
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
import SearchIcon from "./icons/searchIcon";
import menuIcon from "./icons/menuIcon";

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
  components: { Togglebar, NotificationIcon, SearchIcon, menuIcon },
};
</script>

<style>
.header {
  width: 80%;
  height: 10vh;
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
