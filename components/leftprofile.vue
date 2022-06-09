<template>
  <div
    class="h-screen fixed top-0 hidden lg:block lg:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[20%] w-1/4 z-10 py-4 px-2 transition-all duration-300">
    <div class="xl:mx-5 lg:mx-1">
      <div class="flex mt-4 align-middle">
        <leftArrowIcon :color="'#9898B3'" :size="14" />
        <p class="ml-5 text-sm text-dark-500 font-josefin">back</p>
      </div>
      <div class="flex text-light-400 mt-10 justify-between items-center">
        <p class="text-base font-mont font-normal text-dark-600">Receive Newsletter</p>
        <Swit v-model="toggleValue1" />

      </div>
      <div class="flex text-light-400 my-5 items-center justify-between">
        <p class="text-base font-mont font-normal text-dark-600">Push Notifications</p>
        <Swit v-model="toggleValue2" />
      </div>
      <div class="flex text-light-400 my-5 items-center justify-between">
        <p class="text-base font-mont font-normal text-dark-600">Public Profile</p>
        <Swit v-model="toggleValue3" />
      </div>
    </div>

    <div class="absolute bottom-0 mb-10 w-4/5 self-center ml-4">
      <div class="flex border self-center border-dark-500 rounded-md justify-between p-4">
        <p class="text-light-300 font-mont text-base">Logout</p>
        <img src="@/assets/images/logout.svg" alt="Paper" class="w-4 h-4 mt-1">
      </div>
    </div>

  </div>
</template>

<script>
import Swit from "./swit.vue";
import leftArrowIcon from "./icons/leftArrowIcon";


export default {
  data() {
    return {
      toggleValue1: false,
      toggleValue2: false,
      toggleValue3: false,
    };
  },
  components: {
    Swit,
    leftArrowIcon
  },
};
</script>
