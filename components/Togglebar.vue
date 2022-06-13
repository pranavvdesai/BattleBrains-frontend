<template>
  <div
    class="fixed top-0 togglebar p-3 overflow-auto h-[100%] w-[80%] left-[-90%] bg-dark-300 shadow-[5px_0px_15px_rgba(0,0,0,0.5)] overflow-x-hidden lg:hidden"
    :class="`${active ? 'show' : ''}`"
  >
  <div @click="close" class="close relative top-[1%] left-[91%]">
      <LightCloseSquareIcon :size="25" :color="'#fff'" />
    </div>
    <div class="flex flex-row justify-between align-top mt-5">
      <div class="inner flex flex-row">
        <h3>👋</h3>
        <div class="inner flex flex-col ml-2">
          <h3 class="text-md text-dark-700 font-mont"><b>Hi Dev, Good Evening!</b></h3>
          <p class="text-xs text-dark-500 font-josefin">Learn Web3, the Fun way</p>
        </div>
      </div>
    </div>
    <!--Bottom XP div-->
    <div class="w-full flex justify-center lg:px-2 lg:mb-10">
     <div class="flex flex-col items-start mt-24 border-2 border-dark-500 px-4 py-6 rounded-md xs:w-full md:w-3/4 lg:w-full">
        <div class="flex flex-row">
          <h4 class="mr-2 text-dark-700 font-mont"><b>Novice</b></h4>
          <p class="mx-1 text-dark-600 font-josefin">1400/2000 XPs</p>
        </div>
          <div class="bg-white w-full h-3 items-center rounded-lg mt-2">
                <div
                  class="bg-gradient-to-r from-[#00BCD4] to-[#1e90ff] ... w-3/4 h-3 items-center rounded-lg "
                ></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import LightCloseSquareIcon from './icons/lightCloseSquareIcon.vue';

export default {

  props: {
    toggle: {
      type: Function,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("toggle");
    },
  },
  components : {
    LightCloseSquareIcon
  }
};
</script>

<style>
.togglebar {
  transition: 0.5s ease-in-out;
  z-index: 100;
}
.show {
  left: 0%;
}
</style>
