<template>
  <div class="h-screen fixed top-0 hidden lg:block lg:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-dark-300 lg:w-[20%] w-1/4 z-10 py-4 px-2 transition-all duration-300">
    <div class="xl:mx-5 lg:mx-1">
      <div class="flex my-4 mb-7">
        <img
          src="@/assets/images/ArrowLeft.svg"
          alt="Left Arrow"
          class="mr-4 w-4 h-4 mt-2"
        >
        <p class=" text-xl text-light-300">back</p>
      </div>
      <div class="flex text-light-400 mt-4 justify-between items-center">
        <p>Receive Newsletter</p>
        <Swit v-model="toggleValue1" />

      </div>
      <div class="flex text-light-400 py-2 items-center justify-between">
        <p>Receive Newsletter</p>
        <Swit v-model="toggleValue2" />
      </div>
      <div class="flex text-light-400 items-center justify-between">
        <p>Receive Newsletter</p>
        <Swit v-model="toggleValue3" />

      </div>
    </div>
    <div class="absolute bottom-0 mb-5 w-full">
      <div class="flex border-2 border-light-300 mx-8 rounded-md justify-between p-3">
        <p class="text-light-300">Logout</p>
        <img
          src="@/assets/images/logout.svg"
          alt="Paper"
          class="w-3 h-4 mt-1"
        >
      </div>
    </div>

  </div>
</template>

<script>
import Swit from "./swit.vue";

export default {
  data() {
    return {
      toggleValue1: false,
      toggleValue2: false,
      toggleValue3: false,
    };
  },
  components: { Swit },
};
</script>